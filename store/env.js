export const state = () => ({
  lang: 'zh'
})

export const mutations = {
  SET_LANGUAGE(state, str) {
    state.lang = str
  },
}