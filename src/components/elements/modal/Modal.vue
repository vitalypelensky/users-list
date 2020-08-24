<template>
  <el-dialog :title="modalName" :visible.sync="visibleValue" top="20px" class="user__modal">
    <component :is="modalContent" :closeModal="closeModal"/>
  </el-dialog>
</template>

<script>
  import ModalAddContent from './content-add/ContentAdd'
  import ModalEditContent from './content-edit/ContentEdit'
  import ModalDeleteContent from './content-delete/ContentDelete'
  import {MODAL_ADD, MODAL_EDIT, MODAL_DELETE} from'../../../utils/constans-name.js'
  import {mapGetters, mapMutations} from 'vuex'

  export default {
      name: "Modal",
      components: {
        ModalAddContent,
        ModalEditContent,
        ModalDeleteContent,
      },
      data(){
        return {
          modalContents:{
            [MODAL_ADD]: ModalAddContent,
            [MODAL_EDIT]: ModalEditContent,
            [MODAL_DELETE]: ModalDeleteContent,
          }
        }
      },
    computed:{
      ...mapGetters([
      'typeModal',
      'visibleModal'
      ]),
      modalContent(){
        return this.modalContents[this.typeModal]
      },
      visibleValue:{
        get(){
          return this.visibleModal
        },
        set(value){
          this.setVisibleModal(value)
        }
      },
      modalName(){
        return this.typeModal.toUpperCase()
      }
    },
    methods:{
      ...mapMutations([
        'setVisibleModal'
      ]),
      closeModal(){
        this.setVisibleModal(false)
      }
    },
  }
</script>

<style scoped>

</style>
