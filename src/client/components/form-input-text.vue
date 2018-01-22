<template lang="pug">
.createconf-form-control
  label {{ label }}
  small 
      //- text in html typing
      {{ text }}
  input(type='text' placeholder='for example: ubuntu, nodejs-slim')
</template>
<script>
export default {
  name: 'form-input-text',
  props: {
    label: {
      type: String
    },
    text: {
      type: String
    }
  }
}
</script>
