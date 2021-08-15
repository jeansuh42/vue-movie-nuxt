export default {
  namespaced: true, // 이거 module이야. 
  state: () => ({
    msg: '000'
  }),
  getters: {
    reverseMsg(state){
      return state.msg.split('').reverse().join('')
    }
  },
  mutations: {
    updateMsg(state, newMsg) {
      state.msg = newMsg
    }
  },
  actions: {
    reverseMsg({ state, commit }) {
      const newMsg = state.msg.split('').reverse().join('')
      commit('updateMsg', newMsg)
      // this.$store.commit('message/updateMsg')
    }
  }
}