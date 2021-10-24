<template>
<div id="app">
  <navbar />
  <router-view />
  <link rel="stylesheet" href="./assets/all.min.css">
</div>
</template>

<style lang="scss">
</style>

<script>
import navbar from './components/navbar.vue'
export default{
  components: { navbar },
    
}

</script>