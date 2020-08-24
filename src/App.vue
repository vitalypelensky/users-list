<template>
  <div id="app">
    <header-element/>
    <router-view/>
  </div>
</template>

<script>
  import headerElement from './components/elements/header/Header'
export default {
  components:{
    headerElement
  },
  name: 'App'
}
</script>
