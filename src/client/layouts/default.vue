<template lang='pug'>
  span
    navbar
    router-view
    footer-nav
</template>
<script>
  import Vue from 'vue'
  import navbar from '../components/navbar.vue'
  import footer from '../components/footer.vue'

  Vue.component('navbar', navbar)
  Vue.component('footer-nav', footer)

  export default {
    name: 'layout-default'
  }
</script>
