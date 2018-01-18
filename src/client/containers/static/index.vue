<template lang="pug">
  .container.blog 
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
import data from '../../../internals/static-post'

export default {
  name: 'static-page',
  props: ['key_content'],
  data() {
    return {
      title: null,
      content: null
    }
  },

  // watch props changes
  watch: {
    key_content(new_val, old_val) {
      this.fetchData(new_val)
    }
  },

  // component is created
  created() {
    this.fetchData(this.key_content)
  },

  methods: {
    // get data from local json
    fetchData(key_content) { 
      data.find((n, key) => {
        if(key == key_content) {
          this.content = n.content
          this.title = n.title
        } 
      })
    }
  }
}
</script>
