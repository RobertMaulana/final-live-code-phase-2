<template lang="html">
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Simple Blog App</el-menu-item>
      <div class="auth_button" v-show="statusLogin == null">
        <el-menu-item index="1" >Register</el-menu-item>
        <el-menu-item index="1" @click="signin">Signin</el-menu-item>
      </div>
      <div v-show="statusLogin" style="float:right">
        <el-menu-item index="1" @click="signout">Logout</el-menu-item>
      </div>
    </el-menu>
    <el-dialog title="Signin" v-model="dialogFormVisibleSignin">
      <el-form :model="form_signin">
        <el-form-item>
          <el-input v-model="form_signin.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signin.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignin = false">Cancel</el-button>
        <el-button type="primary" @click="signinAction(form_signin);dialogFormVisibleSignin = false;">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
          form_signin: {
            username: '',
            password: '',
          },
          dialogFormVisibleSignin: false,
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        signin(){
          this.dialogFormVisibleSignin = true
        },
        signout(){
          window.localStorage.clear();
          window.location = "/";
        },
        ...mapActions([
          "signinAction"
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
