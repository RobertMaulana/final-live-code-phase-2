import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    dataArticle: [],
    user: []
  },
  getters: {
    dataArticle: (state) => {
      return state.dataArticle
    },
    isLogin: (state) => {
      return window.localStorage.getItem('token')
    }
  },
  mutations: {
    dataArticle: (state, payload) => {
      state.dataArticle = payload
    },
    signin: (state, payload) => {
      window.localStorage.setItem('token', payload.token);
      window.localStorage.setItem('user', payload.username);
      window.localStorage.setItem('id', payload.id);
      state.user.push(payload)
      window.location = "/";
    },
    newArticle: (state, payload) => {
      state.dataArticle.push(payload)
    },
    editArticle: (state, payload) => {
      state.dataArticle = payload
    },
  },
  actions: {
    dataArticle: ({commit}) => {
      axios.get('http://localhost:3000/article')
      .then((response) => {
        commit("dataArticle", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    newArticle: ({commit}, payload) => {
      axios.post('http://localhost:3000/article',{
        title  : payload.title,
        content  : payload.content,
        author  : window.localStorage.getItem('id')
      }, {headers: {'token': window.localStorage.getItem('token')}})
      .then((response) => {
        commit("newArticle", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    editArticleAction: ({commit}, payload) => {
      axios.put('http://localhost:3000/article/'+payload.id,{
        title  : payload.title,
        content  : payload.content,
        author  : window.localStorage.getItem('id')
      }, {headers: {'token': window.localStorage.getItem('token')}})
      .then((response) => {
        commit("editArticle", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
    signinAction: ({commit}, payload) => {
      axios.post('http://localhost:3000/user/signin',{
        username  : payload.username,
        password  : payload.password,
      })
      .then((response) => {
        commit("signin", response.data)
      })
      .catch((error) => {
        console.log(error);
      });
    },
  }
})
