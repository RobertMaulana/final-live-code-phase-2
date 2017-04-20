import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    dataArticle: []
  },
  getters: {
    dataArticle: (state) => {
      return state.dataArticle
    },
  },
  mutations: {
    dataArticle: (state, payload) => {
      state.dataArticle = payload
    }
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
    }
  }
})
