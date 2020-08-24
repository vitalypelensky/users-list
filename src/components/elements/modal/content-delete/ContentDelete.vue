<template>
  <div>
    <p>
      Do you want to remove the user from the list?
    </p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeModal">Cancel</el-button>
        <el-button type="danger" :loading="loading" @click="deleteHandler">Confirm</el-button>
      </span>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
      name: "ModalDelete",
      props: {
        closeModal: {
          type: Function,
        },
      },
      data(){
        return {
          loading: false
        }
      },
      computed:{
        ...mapGetters([
          'activeUser'
        ]),
      },
      methods:{
        ...mapActions([
          'DELETE_USER',
        ]),
        toggleLoadingButton(){
          this.loading = !this.loading
        },
        showNotification(type, title, message){
          this.$notify[type]({
            title: title,
            message: message
          });
        },
       async deleteHandler(){
          this.toggleLoadingButton()
          try {
            await this.DELETE_USER(this.activeUser.id)
            this.showNotification('success','Success','User deleted!')
          } catch (e) {
            this.showNotification('error','Oops','something went wrong,please try again')
          }finally {
            this.toggleLoadingButton()
            this.closeModal()
          }
        }
      }
    }
</script>
