export const state = () => ({
  navTitle: "",
})

export const mutations = {
  rename (state, text) {
    state.navTitle = text;
  }
}
