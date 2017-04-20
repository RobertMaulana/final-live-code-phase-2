export const Getters = {
  dataArticle: (state) => {
    return state.dataArticle
  },
  isLogin: (state) => {
    return window.localStorage.getItem('token')
  }
}
