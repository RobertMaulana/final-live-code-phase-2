<template lang="html">
  <div>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">Simple Blog App</el-menu-item>
      <div class="auth_button">
        <el-menu-item index="1" id="login">Register</el-menu-item>
        <el-menu-item index="1" id="logout">Login</el-menu-item>
      </div>
    </el-menu>
    <!-- <el-dialog title="Registration" v-model="dialogFormVisible">
      <el-form :model="form_signup">
        <el-form-item>
          <el-input v-model="form_signup.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item
        prop="email"
        :rules="[
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: 'blur,change' }
        ]"
      >
        <el-input v-model="form_signup.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form_signup.password" placeholder="Password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form_signup.role" placeholder="Admin / Guest"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="signup(form_signup);dialogFormVisible = false; notification()">Confirm</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Signin" v-model="dialogFormVisibleSignin">
      <el-form :model="form_signin">
        <el-form-item>
          <el-input v-model="form_signin.username" placeholder="Username"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input type="password" v-model="form_signin.password" placeholder="Password"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleSignin = false">Cancel</el-button>
        <el-button type="primary" @click="signin(form_signin);dialogFormVisibleSignin = false;">Confirm</el-button>
      </span>
    </el-dialog> -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
    data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
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
