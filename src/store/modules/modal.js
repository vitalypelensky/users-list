const state = {
  visibleModal: false,
  typeModal: '',
  activeUser: null,
}

const getters = {
  visibleModal: state => {
    return state.visibleModal
  },
  typeModal: state => {
    return state.typeModal
  },
  activeUser: state => {
    return state.activeUser
  },
}

const mutations = {
  setVisibleModal: (state, value) => {
    state.visibleModal = value
  },
  setTypeModal: (state, type) => {
    state.typeModal = type
  },
  setActiveUser: (state, user) => {
    state.activeUser = user
  },
}

const actions = {
  openModal({commit}, {user, type}){
    commit('setActiveUser', user)
    commit('setTypeModal', type)
    commit('setVisibleModal', true)
  },
  closeModal({commit}){
    commit('setVisibleModal', false)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
