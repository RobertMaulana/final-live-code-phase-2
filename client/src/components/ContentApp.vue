<template lang="html">
  <el-row>
    <el-col :span="24">
      <div class="grid-content">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span style="line-height: 36px;">Card name</span>
            <el-button-group style="float: right">
              <el-button type="primary" icon="edit"></el-button>
              <el-button type="danger" icon="delete"></el-button>
            </el-button-group>
          </div>
          <div class="text item">
            <span>Maulana | 2017 Maret 2017</span>
            <hr>
            <p>content blog</p>
          </div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data(){
    return {

    }
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
