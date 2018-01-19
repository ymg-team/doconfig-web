<template lang='pug'>
.container.blog 
    .grid
        .col-12 
            header
              h1 Blog
              h2 last updated : 24 Oct 2017 
    .grid.blog-content     
        each n, key in [1,2,3,4,5,6,7,8,9]
            card(:key=key)
    .grid.p-lg.text-center
        .col 
            button.btn.btn-white.btn-lg Load More
</template>
<script>
import Vue from 'vue'
import card from '../../components/card-blog.vue'

Vue.component('card', card)

export default {
  name: 'blog'
}
</script>
