<template lang='pug'>
.blog-list(:class="size == 'small' ? '.col-4_sm-12' : '.col-12'")
  router-link(to='/blog/title-12') 
      img(src='/images/thumb.png') 
  router-link(to='/blog/title-12')
      h3 This is Title of Blog 
  p.text-gray 
      span.fa.fa-user yussan&nbsp
      | - 
      span.fa.fa-calendar-o 
          | 23 jan 2017
</template>
<script>
export default {
  name: 'card-blog',
  //ref : https://vuejs.org/v2/guide/components.html#Prop-Validation
  props: {
      data: Object,
      size: {
          type: String,
          default: 'small'
      }
  }
}
</script>
