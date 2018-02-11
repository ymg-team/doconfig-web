<template lang='pug'>
.createconf-form-control
  label PORT *
  input-text(
    name='port'
    type='text' 
    placeholder='for example: 3000 (and press enter)'
    :value='formdata.port'
    :formdata='formdata'
    :formvalidation='formvalidation'
    :handleChange='handleChange'
    )
</template>
<script>
import Vue from 'vue'
import text from '../form/form-input-text.vue'

Vue.component('input-text', text)

export default {
  name: 'form-nginx-nodejs',
  props: ['value', 'handleChange', 'formvalidation', 'formdata']
}
</script>
