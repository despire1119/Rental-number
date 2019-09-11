const state = {
  currentRoute: '???'
}

const mutations = {
  UPDATE_ROUTE: (state, payload) => {
    state.currentRoute = payload
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
