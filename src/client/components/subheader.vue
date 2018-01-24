<template lang='pug'>
  .container.config
    .grid
        .col-12 
            header.createconf
                h1 {{ title }}
                h2 {{ subtitle }}.
                  | &nbsp;
                  a(:href='link' target='_blank') Readmore about {{ name }}
</template>

<script>
export default {
  data(){
    return {
    }
  },
  // ref: https://vuejs.org/v2/guide/components.html#Passing-Data-with-Props
  props: ['title', 'subtitle', 'name', 'link'],
  name: 'subheader',
}
</script>
