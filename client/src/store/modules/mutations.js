export const Mutations = {
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
    state.dataArticle = payload
  },
  editArticle: (state, payload) => {
    state.dataArticle = payload
  },
  deleteArticle: (state, payload) => {
    state.dataArticle = payload
  }
}
