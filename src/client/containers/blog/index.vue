<template lang='pug'>
transition(name='page-transition')
    .container.blog(v-if="start")
        .grid
            .col-12 
                header
                h1 Blog
                h2 last updated : 24 Oct 2017 
        .grid.blog-content     
            card
            card
            card
            card
            card
            card
            card
            card
            card
        .grid.p-lg.text-center
            .col 
                button.btn.btn-white.btn-lg Load More
</template>
<script>
import Vue from 'vue'
import card from '../../components/card-blog.vue'

Vue.component('card', card)

export default {
  name: 'blog',
  data() {
      return {
          start: false
      }
  },
  created() {
      setTimeout(() => {
            this.start = true 
        }, 50)
  }
}
</script>
