<template>

  <div class="information-object" v-if="valueIsObject">
    <p class="information__title">{{title}}:</p>
    <information-item v-for="(item, index) of value" :key="index" :title="index" :value="item" />
  </div>
  <div v-else class="information">
    <p class="information__title">{{title}}:</p>
    <p class="information__value">{{value}}</p>
  </div>
</template>

<script>
  import InformationItem from './InformationItem'
  export default {
      name: "InformationItem",
      components:{
        InformationItem
      },
      props:{
        title:{
          type: String,
          default: ''
        },
        value:{
          type: [String, Number, Object],
          default: ''
        }
      },
      computed:{
        valueIsObject(){
          return Object.prototype.toString.call(this.value) === '[object Object]'

        }
      }
    }
</script>

<style scoped lang="sass">
  @import "./styles"
</style>
