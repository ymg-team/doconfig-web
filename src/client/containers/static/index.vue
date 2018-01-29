<template lang="pug">
transition(name='page-transition')
  .container.blog(v-if="start")
    .grid
        .col-12 
            header
                h1 {{ title }}
                h2 Posted by yussan - 24 Oct 2017 12:00
    .grid-center.blog-content     
        .col-8_sm-12
            //- content
            img(src='images/thumb.png')

            .m-sm

            article(v-html='content')
</template>
<script>
import data from '../../../../internals/static-post'
import { toCamelCase } from 'string-manager'

export default {
  name: 'static-page',
  props: ['key_content'],
  data() {
    return {
      start: false,
      loading: true,
      title: null,
      content: null
    }
  },

  // watch props changes
  watch: {
    key_content(new_val, old_val) {
      this.loading = true
      this.fetchData(new_val)
    }
  },

  // component is created
  created() {
    this.fetchData(this.key_content)
    setTimeout(() => {
        this.start = true 
    }, 50)
  },

  methods: {
    // get data from local json
    fetchData(key_content) { 
      data.find((n, key) => {
        if(key == key_content) {
          this.loading = false
          this.content = n.content
          this.title = toCamelCase(n.title)
        } 
      })
    }
  },


}
</script>
