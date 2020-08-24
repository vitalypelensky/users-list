import {apiGetUsers, apiDeleteUser, apiAddUser, apiEditUser} from '../../api/index'

const state = {
  users: [],
  loading: false,
}

const getters = {
  _users: state => {
    return state.users
  },
  _usersSort: state => {
    return state.users.sort((a, b) => a.username.localeCompare(b.username))
  },
  _loading: state => {
    return state.loading
  },
}

const mutations = {
  _setUsers: (state, users) => {
    state.users = users
  },
  _addUsers: (state, user) => {
    state.users.push(user)
  },
  _updateUsers: (state, user) => {
    let indexUser = state.users.findIndex(item => item.id === user.id)
    state.users.splice(indexUser, 1, user)
  },
  _deleteUsers: (state, userId) => {
    state.users = state.users.filter(item => item.id != userId)
  },
  _setLoading: (state, value) => {
    state.loading = value
  },
}

const actions = {
  async GET_USERS_DATA ({commit}){
    commit('_setLoading', true)
    try {
      let {data}  = await apiGetUsers()
      console.log(data)
      commit('_setUsers',data)
    } catch (error) {
    } finally {
      commit('_setLoading', false)
    }
  },
  async EDIT_USERS_DATA ({commit}, dataUser){
    try {
      let {data}  = await apiEditUser(dataUser.id, dataUser)
      commit('_updateUsers', data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  },
  async ADD_NEW_USERS ({commit}, dataUser){
    try {
      let {data}  = await apiAddUser(dataUser)
      console.log(data)
      commit('_addUsers', data)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  },
  async DELETE_USER ({commit}, userId){
    try {
      await apiDeleteUser(userId)
      commit('_deleteUsers', userId)
      return Promise.resolve()
    } catch (error) {
      return Promise.reject()
    }
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}
