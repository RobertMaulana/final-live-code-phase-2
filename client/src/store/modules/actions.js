export const Actions = {
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
  deleteArticle: ({commit}, payload) => {
    if (payload.author.username != window.localStorage.getItem('user')) {
      alert("You are not authorized!")
    }else{
      let conf = confirm("Are you sure?")
      if (conf) {
        axios.delete('http://localhost:3000/article/'+payload._id, {headers: {'token': window.localStorage.getItem('token')}})
        .then((response) => {
          commit("deleteArticle", response.data)
        })
        .catch((error) => {
          console.log(error);
        });
      }
    }

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
  signupAction: ({commit}, payload) => {
    axios.post('http://localhost:3000/user/signup',{
      name  : payload.name,
      username  : payload.username,
      email  : payload.email,
      password  : payload.password,
    })
    .then((response) => {
      commit("signup", response.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }
}
