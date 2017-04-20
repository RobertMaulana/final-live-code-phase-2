<template lang="html">
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1">Simple Blog App</el-menu-item>
      <div class="auth_button" v-show="statusLogin == null">
        <el-menu-item index="1" @click="signup">Signup</el-menu-item>
        <el-menu-item index="1" @click="signin">Signin</el-menu-item>
      </div>
      <div v-show="statusLogin" style="float:right">
        <el-menu-item index="1" @click="signout">Logout</el-menu-item>
      </div>
    </el-menu>
    <el-dialog title="Signup" v-model="dialogFormVisibleSignup">
      <el-form :model="form_signup">
        <el-form-item>
          <el-input v-model="form_signup.name" placeholder="Name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.password" placeholder="Password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignup = false">Cancel</el-button>
        <el-button type="primary" @click="signupAction(form_signup);dialogFormVisibleSignup = false;notification()">Confirm</el-button>
      </span>
    </el-dialog>
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
          form_signup: {
            name: '',
            username: '',
            email: '',
            password: ''
          },
          dialogFormVisibleSignin: false,
          dialogFormVisibleSignup: false,
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
        signup(){
          this.dialogFormVisibleSignup = true
        },
        notification() {
          this.$notify({
            title: 'Success',
            message: 'Success registration, please login in menu bar!',
            type: 'success'
          });
        },
        ...mapActions([
          "signinAction","signupAction"
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
