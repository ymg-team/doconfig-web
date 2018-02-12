<template lang='pug'>
.createconf-form-control
  label ROOT APP LOCATION *
  input-text(
    name='root'
    type='text' 
    placeholder='for example: /var/www/app/'
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
  name: 'form-nginx',
  props: ['value', 'handleChange', 'formvalidation', 'formdata']
}
</script>
