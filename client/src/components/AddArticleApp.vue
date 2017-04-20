<template lang="html">
  <el-row :gutter="20">
    <el-col :span="2"><div class="grid-content"></div></el-col>
    <el-col :span="20">
      <div class="grid-content bg-purple">
        <div style="margin-top: 15px;">
          <el-input placeholder="Please input" v-show="statusLogin">
            <el-button slot="append" icon="plus" @click="addArticle"></el-button>
          </el-input>
          <el-input
            placeholder="Please input"
             v-show="statusLogin == null">
            <el-button slot="append" icon="plus" @click="addArticle" :disabled="true"></el-button>
          </el-input>
        </div>
      </div>
    </el-col>
    <el-dialog title="New Article" v-model="dialogFormVisible">
      <el-form :model="add_article">
        <el-form-item>
          <el-input v-model="add_article.title" placeholder="Title"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="Content"
            v-model="add_article.content">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="newArticle(add_article);dialogFormVisible = false;">Confirm</el-button>
      </span>
    </el-dialog>
    <el-col :span="2"><div class="grid-content"></div></el-col>
  </el-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data(){
    return {
      dialogFormVisible: false,
      add_article: {
        title: '',
        content: '',
      }
    }
  },
  methods: {
    addArticle() {
      this.dialogFormVisible= true
    },
    ...mapActions([
      "newArticle"
    ]),
  },
  computed: {
  ...mapGetters({
      statusLogin: "isLogin"
    })
  }
}
</script>

<style lang="css" scoped>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
