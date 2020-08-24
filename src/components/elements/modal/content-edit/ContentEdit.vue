<template>
  <div>
    <el-form :model="userEditData" :rules="rules" ref="userEdit">
      <el-form-item label="Username" prop="username" required>
        <el-input placeholder="Username" v-model="userEditData.username"/>
      </el-form-item>
      <el-form-item label="Email" prop="email" required>
        <el-input placeholder="Email" v-model="userEditData.email"/>
      </el-form-item>
      <el-form-item label="City">
        <el-input placeholder="City" v-model="userEditData.address && userEditData.address && userEditData.address.city"/>
      </el-form-item>
      <el-form-item label="Street">
        <el-input placeholder="Street" v-model="userEditData.address && userEditData.address && userEditData.address.street"/>
      </el-form-item>
      <el-form-item label="Suite">
        <el-input placeholder="Suite" v-model="userEditData.address && userEditData.address && userEditData.address.suite"/>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeModal">Cancel</el-button>
      <el-button type="primary" :loading="loading" @click="submitForm('userEdit')">Confirm</el-button>
    </span>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "ModalEdit",
    props: {
      closeModal: {
        type: Function,
      },
    },
    data(){
      return {
        loading: false,
        userEditData: {},
        rules:{
          username:[{ required: true, message: 'Please input username', trigger: 'blur' }],
          email:[{ required: true, message: 'Please input email', trigger: 'blur' }],
        }
      }
    },
    computed:{
      ...mapGetters([
        'activeUser'
      ]),
    },
    methods:{
      ...mapActions([
        'EDIT_USERS_DATA',
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
      setUserData(user){
        this.userEditData = JSON.parse(JSON.stringify(user))
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.editHandler()
          } else {
            return false
          }
        });
      },
      async editHandler(){
        this.toggleLoadingButton()
        try {
          await this.EDIT_USERS_DATA(this.userEditData)
          this.showNotification('success','Success','User updated')
        } catch (e) {
          this.showNotification('error','Oops','something went wrong,please try again')
        }finally {
          this.toggleLoadingButton()
          this.closeModal()
        }
      }
    },
    mounted(){
      this.setUserData(this.activeUser)
    }
  }
</script>

