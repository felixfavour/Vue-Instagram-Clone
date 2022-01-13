const headerStore = {
  namespaced: true,
  state: {
    activityModalVisible: false,
    profileModalVisible: false
  },
  mutations: {
    setActivityModalVisible (state, value) {
      state.activityModalVisible = value
    },
    setProfileModalVisible (state, value) {
      state.profileModalVisible = value
    },
    closeModals (state) {
      state.activityModalVisible = false
      state.profileModalVisible = false
    }
  }
}

export default headerStore
