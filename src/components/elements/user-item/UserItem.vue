<template>
  <div class="user">
    <div class="user__short-information">
      <div class="user__short-information--information">
        <div class="user__short-information--logo">
          {{userLettersAvatar}}
        </div>
        <div class="user__short-information--items">
          <information-item title="Username" :value="user.username" />
          <information-item title="Email" :value="user.email" />
          <button class="user__short-information--button" @click="toggleShowMoreValue">
            {{titleInformationSizeButton}}
          </button>
        </div>
      </div>
      <div class="user__short-information--control-buttons">
        <el-row>
          <el-button @click="openEditModal" type="primary" icon="el-icon-edit" circle/>
          <el-button @click="openDeleteModal" type="danger" icon="el-icon-delete" circle/>
        </el-row>
      </div>
    </div>
    <div class="user__more-information" v-if="showMoreInfoAboutUser">
      <information-item v-for="(item, index) of user" :key="index" :title="index" :value="item" />
    </div>
  </div>
</template>

<script>
  import InformationItem from './components/information-item/InformationItem'
  import {MODAL_EDIT, MODAL_DELETE} from'../../../utils/constans-name.js'

  import {mapActions} from 'vuex'
    export default {
      name: "UserItem",
      components:{
        InformationItem,
      },
      props:{
        user:{
          type: Object,
          default: null
        }
      },
      data() {
        return {
          showMoreInfoAboutUser: false,
        }
      },
      computed:{
        titleInformationSizeButton(){
          return this.showMoreInfoAboutUser ? 'Hide' : 'More'
        },
        userLettersAvatar(){
          return this.user.username.substring(0, 1).toUpperCase()
        }
      },
      methods: {
        ...mapActions([
          'openModal',
        ]),
        toggleShowMoreValue(){
          this.showMoreInfoAboutUser = !this.showMoreInfoAboutUser
        },
        openEditModal(){
          this.openModal({user:this.user, type: MODAL_EDIT})
        },
        openDeleteModal(){
          this.openModal({user: this.user, type: MODAL_DELETE})
        }
      },
    }
</script>

<style scoped lang="sass">
  @import "./styles"
</style>
