const headerStore = {
  namespaced: true,
  state: {
    activityModalVisible: false
  },
  mutations: {
    setActivityModalVisible (state, value) {
      state.activityModalVisible = value
    }
  }
}

export default headerStore
