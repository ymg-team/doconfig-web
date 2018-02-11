<template lang="pug">
.createconf-form-control
  label {{ label }} *
  small 
      //- text in html typing
      span(v-html='text')
  br
  label
    input(
        type='checkbox' 
        :name='name'
        :value='formdata[name]' 
        v-on:change='handleChange')
    | &nbsp;{{ other_text }}
</template>
<script>

const props = {
  label: {
      type: String
  },
  name: {
    type: String
  },
  text: {
    type: String
  },
  other_text: {
    type: String
  },
  value: {
    type: Boolean
  },
  formdata: {
    type: Object
  },
  formvalidation: {
    type: Object
  },
  handleChange: {
    type: Function
  }
}

export default {
  name: 'form-input-checkbox',
  props,
  created() {
  }
}
</script>
