<template lang="pug">
  .error-page 
    h1 Error Page
</template>
<script>
export default {
  name: 'error',
  props: ['code', 'message']
}
</script>
