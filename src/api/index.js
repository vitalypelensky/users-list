import axios from '../plugins/axios'

let getDataApiAddUser = (dataUser) => {
  return {
    username: dataUser.username,
    email: dataUser.email,
    address: dataUser.address
  }
}

export let apiGetUsers = () => {
  return axios.get('/users')
}

export let apiAddUser = (data) => {
  let dataApi = getDataApiAddUser(data)
  return axios.post('/users', dataApi)
}

export let apiEditUser = (userId, data) => {
  return axios.put(`/users/${userId}`, data)
}

export let apiDeleteUser = (userId) => {
  return axios.delete(`/users/${userId}`)
}
