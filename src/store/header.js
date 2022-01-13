const headerStore = {
  namespaced: true,
  state: {
    activityModalVisible: false,
    profileModalVisible: false,
    npModalVisible: false
  },
  mutations: {
    setActivityModalVisible (state, value) {
      state.activityModalVisible = value
    },
    setProfileModalVisible (state, value) {
      state.profileModalVisible = value
    },
    setNPModalVisible (state, value) {
      state.npModalVisible = value
    },
    closeModals (state) {
      state.activityModalVisible = false
      state.profileModalVisible = false
    }
  }
}

export default headerStore
