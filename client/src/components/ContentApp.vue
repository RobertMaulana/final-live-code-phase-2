<template lang="html">
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-card class="box-card" v-for="(article, index) in this.$store.state.dataArticle" :key="index">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">{{article.title}}</span>
            <el-button-group style="float: right">
              <el-button type="primary" icon="edit" @click="addArticle"></el-button>
              <el-button type="primary" icon="edit" @click="editArticle"></el-button>
              <el-button type="danger" icon="delete" @click="deleteArticle"></el-button>
            </el-button-group>
          </div>
          <div class="text item">
            <span>{{article.author.name}} | {{article.createdAt}}</span>
            <hr>
            <p>{{article.content}}</p>
          </div>
        </el-card>
      </div>
      <el-dialog title="New Article" v-model="dialogFormVisible">
        <el-form :model="add_article">
          <el-form-item>
            <el-input v-model="add_article.title" placeholder="Title"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="add_article.content" placeholder="Content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="add_article.author" placeholder="Author"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">Cancel</el-button>
          <el-button type="primary" @click="addArticle();dialogFormVisible = false; notification()">Confirm</el-button>
        </span>
      </el-dialog>
      <el-dialog title="edit Article" v-model="dialogFormVisibleEdit">
        <el-form :model="edit_article">
          <el-form-item>
            <el-input v-model="edit_article.title" placeholder="Title"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="edit_article.content" placeholder="Content"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input v-model="edit_article.author" placeholder="Author"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisibleEdit = false">Cancel</el-button>
          <el-button type="primary" @click="editArticle();dialogFormVisibleEdit = false; notification()">Confirm</el-button>
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
      dialogFormVisible: false,
      dialogFormVisibleEdit: false,
      add_article: {
        title: '',
        content: '',
        author: '',
      },
      edit_article: {
        title: '',
        content: '',
        author: '',
      }
    }
  },
  methods: {
    addArticle() {
      this.dialogFormVisible= true
    },
    editArticle() {
      this.dialogFormVisibleEdit= true
    },
    deleteArticle() {
      this.dialogFormVisible= true
    }
  },
  computed: {
    ...mapGetters({
      dataArticle: 'dataArticle',
    })
  },
  created(){
    this.$store.dispatch("dataArticle")
  }
}
</script>

<style lang="css" scoped>
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
