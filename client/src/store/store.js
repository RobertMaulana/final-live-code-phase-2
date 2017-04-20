import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex({
  state:{
    dataArticle: []
  },
  getters: {

  },
  mutations: {
    dataArticle: (state, payload) => {

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
