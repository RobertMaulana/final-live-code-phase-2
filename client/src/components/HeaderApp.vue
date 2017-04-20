<template lang="html">
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Simple Blog App</el-menu-item>
      <div class="auth_button">
        <el-menu-item index="1" id="login">Register</el-menu-item>
        <el-menu-item index="1" @click="signin">Signin</el-menu-item>
      </div>
    </el-menu>
    <el-dialog title="Signin" v-model="dialogFormVisibleSignin">
      <el-form>
        <el-form-item>
          <el-input v-model="username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="password" placeholder="Password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignin = false">Cancel</el-button>
        <el-button type="primary" @click="signin();dialogFormVisibleSignin = false; notification()">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
          username: '',
          password: '',
          dialogFormVisibleSignin: false,
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        signin(){
          this.dialogFormVisibleSignin = true
        }
      }
    // methods: {
    //   ...mapActions([
    //     "signup","signin", "view_cart"
    //   ]),
    //   signup_modal(){
    //     this.dialogFormVisible = true
    //   },
    //   signin_modal(){
    //     this.dialogFormVisibleSignin = true
    //   },
    //   notification() {
    //     this.$message({
    //       message: 'Congrats, Please verify link activation in your mail address!',
    //       type: 'success'
    //     });
    //   },
    //   logout(){
    //     window.localStorage.clear();
    //     window.location = "/";
    //   }
    // },
    // computed: {
    //   ...mapGetters({
    //     statusRegistration: 'needActivation',
    //     statusLogin: 'isLogin',
    //     countCart: 'countCart'
    //   })
    // }
}
</script>

<style lang="css" scoped>
  .auth_button{
    float: right;
  }
  .el-select {
    width: 100%;
  }
  .el-menu{
    margin-top: -50px;
    border: 1px solid #d9d9d9;
    background-color: #fff
  }
</style>
