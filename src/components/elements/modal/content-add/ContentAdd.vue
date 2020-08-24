<template>
  <div>
    <el-form :model="newUserData" :rules="rules" ref="userEdit">
      <el-form-item label="Username" prop="username" required>
        <el-input placeholder="Username" v-model="newUserData.username"/>
      </el-form-item>
      <el-form-item label="Email" prop="email" required>
        <el-input placeholder="Email" v-model="newUserData.email"/>
      </el-form-item>
      <el-form-item label="City">
        <el-input placeholder="City" v-model="newUserData.address.city"/>
      </el-form-item>
      <el-form-item label="Street">
        <el-input placeholder="Street" v-model="newUserData.address.street"/>
      </el-form-item>
      <el-form-item label="Suite">
        <el-input placeholder="Suite" v-model="newUserData.address.suite"/>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="closeModal">Cancel</el-button>
      <el-button type="primary" :loading="loading" @click="submitForm('userEdit')">Confirm</el-button>
    </span>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: "ModalEdit",
    props:{
      closeModal: {
        type: Function,
      }
    },
    data(){
      return {
        loading: false,
        newUserData: {
          username: '',
          email: '',
          address: {
            city: '',
            street: '',
            suite: ''
          }
        },
        rules:{
          username:[{ required: true, message: 'Please input username', trigger: 'blur' }],
          email:[{ required: true, type:'email', message: 'Please input email', trigger: 'blur' }],
        }
      }
    },
    methods:{
      ...mapActions([
        'ADD_NEW_USERS',
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
          let data = await this.ADD_NEW_USERS(this.newUserData)
          console.log(data)
          this.showNotification('success','Success','User updated')
        } catch (e) {
          this.showNotification('error','Oops','something went wrong,please try again')
        }finally {
          this.toggleLoadingButton()
          this.closeModal()
        }
      }
    },
  }
</script>
