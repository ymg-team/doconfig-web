<template lang='pug'>
  .container.blog 
    .grid.text-center
        .col-12 
            header
                h1 {{ code }}
                h2 {{ message }}
                br 
                router-link.btn.btn-white.btn-lg(to='/') Back to Home
</template>
<script>
export default {
  name: 'error',
  props: ['code', 'message']
}
</script>
