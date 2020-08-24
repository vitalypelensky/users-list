<template>
  <div v-loading="_loading" class="users">
    <el-input placeholder="Please input username" v-model="search"/>
    <user-item v-for="(user, index) in usersFilteredByUsarname" :key="user.id" :user="user" :index="index" />
    <el-button @click="openAddModal" type="success" icon="el-icon-plus" circle class="users__button"/>
    <modal/>
  </div>
</template>

<script>
  import UserItem from '../../elements/user-item/UserItem'
  import Modal from '../../elements/modal/Modal'
  import {MODAL_ADD} from'../../../utils/constans-name.js'
  import {mapGetters, mapActions} from 'vuex'
    export default {
      name: "UserList",
      components:{
        UserItem,
        Modal
      },
      data() {
        return {
          search: ''
        }
      },
      computed:{
        ...mapGetters([
          '_usersSort',
          'activeUser',
          '_loading'
        ]),
        usersFilteredByUsarname(){
          return this._usersSort.filter(item => item.username.toLowerCase().includes(this.search))
        }
      },
      methods: {
        ...mapActions([
          'GET_USERS_DATA',
          'openModal'
        ]),
        openAddModal(){
          this.openModal({user: null, type: MODAL_ADD})
        }
      },
      created() {
        this.GET_USERS_DATA()
      }
    }
</script>

<style scoped lang="sass">
  @import "./styles"
</style>
