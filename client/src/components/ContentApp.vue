<template lang="html">
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-card class="box-card" v-for="(article, index) in this.$store.state.dataArticle" :key="index">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">{{article.title}}</span>
            <el-button-group style="float: right" v-show="statusLogin">
              <el-button type="primary" icon="edit" @click="editArticle(article)"></el-button>
              <el-button type="danger" icon="delete" @click="deleteArticle(article)"></el-button>
            </el-button-group>
          </div>
          <div class="text item">
            <span>{{article.author.name}} | {{article.createdAt}}</span>
            <hr>
            <p>{{article.content}}</p>
          </div>
        </el-card>
      </div>
      <el-dialog title="edit Article" v-model="dialogFormVisibleEdit">
        <el-form :model="edit_article">
          <el-form-item>
            <el-input v-model="edit_article.title" placeholder="Title"></el-input>
            <el-input v-model="edit_article.id" placeholder="Title" type="hidden"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="edit_article.content" placeholder="Content"></el-input>
            <el-input v-model="edit_article.author" placeholder="Author" type="hidden"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleEdit = false">Cancel</el-button>
          <el-button type="primary" @click="editArticleAction(edit_article);dialogFormVisibleEdit = false;">Confirm</el-button>
        </span>
      </el-dialog>
    </el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return {
      dialogFormVisibleEdit: false,
      add_article: {
        title: '',
        content: '',
        author: '',
      },
      edit_article: {
        id: '',
        title: '',
        content: '',
        author: '',
      }
    }
  },
  methods: {
    editArticle(article) {
      if (article.author.username != window.localStorage.getItem('user')) {
        this.notification("edit not authorized!")
      }else{
        this.dialogFormVisibleEdit= true;
        this.edit_article.id = article._id;
        this.edit_article.title = article.title;
        this.edit_article.content = article.content;
        this.edit_article.author = window.localStorage.getItem('id');
      }
    },
    notification(notif="edit not authorized!") {
      if (notif == "delete not authorized!") {
        this.$notify({
          title: 'Error',
          message: 'Sorry, you are not authorized to delete this article!',
          type: 'error'
        });
      }else if (notif="edit not authorized!") {
        this.$notify({
          title: 'Error',
          message: 'Sorry, you are not authorized to edit this article!',
          type: 'error'
        });
      }
    },
    ...mapActions([
      'editArticleAction',
      'deleteArticle'
    ])
  },
  computed: {
    ...mapGetters({
      dataArticle: 'dataArticle',
      statusLogin: "isLogin"
    })
  },
  created(){
    this.$store.dispatch("dataArticle")
  }
}
</script>

<style lang="css" scoped>
  .el-card {
    margin-top: 20px;
  }
  .el-row {
    margin-top: 20px;
  }
  .el-col{
    text-align: left;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
