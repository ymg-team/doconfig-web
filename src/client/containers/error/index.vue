<template lang='pug'>
  .container
    .grid
      .col-12.error-page 
        h1(style='font-size:4em') {{ code }}
          br
          small {{ message }}
</template>
<script>
export default {
  name: 'error',
  props: ['code', 'message']
}
</script>
