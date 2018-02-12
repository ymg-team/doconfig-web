<template lang='pug'>
.createconf-form-control(v-bind:class='[formvalidation.result && formvalidation.result[name] != undefined && formvalidation.result[name].isValid === false ? \'error\' : \'\' ]')
  label {{ label }}
  small 
      //- text in html typing
      span(v-html='text')
  input(
    type='text' 
    :name='name'
    v-on:keyup='handleChange'
    :value='formdata[name] || \'\''
    :placeholder='placeholder')
  
  //- error message
  .error-message(v-if='formvalidation.result && formvalidation.result[name] != undefined && formvalidation.result[name].isValid === false')
    small {{ formvalidation.result[name].message }}
  //- end of error message
  
  //- is recommendations available
  .recommendation(v-if='formdata[`rec_${name}`] && formdata[`rec_${name}`].length > 0')
    ul(style='padding:0;margin-top:-.1em') 
      li(style='list-style:none;padding:.5em;background:#2cb5e8;margin-bottom:.2em' 
        v-for='(n, index) in formdata[`rec_${name}`]') 
        a(
          href='javascript:;' 
          style='color:#236f90 !important' 
          v-on:click='() => handleRecommendations(name, n)') 
          | {{ n }}
  //- end of recommendations

  //- is childs available
  .commands(v-if='formdata[`childs_${name}`] && formdata[`childs_${name}`].length > 0')
    .command(
      title='click to remove' 
      class='command' 
      v-for='(n, index) in formdata[`childs_${name}`]' 
      style='margin-right:.25em'
      v-on:click='() => handleRemoveChild(name, index)')
      | {{ label }}: {{ n }}
  //- end of childs available

</template>
<script>
// PropsValidation
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
    placeholder: {
      type: String
    },
    formdata: {
      type: Object,
      default: () => {
        return {}
      }
    },
    formvalidation: {
      type: Object,
      default: () => {
        return {}
      }
    },
    handleChange: {
      type: Function
    },
    handleRecommendations: {
      type: Function
    },
    handleRemoveChild: {
      type: Function
    }
  }

export default {
  name: 'form-input-text',
  // props validation
  props,
  watch: {
  },
  // methods declaration
  methods: {
    
  },
  created() {
    
  }
}
</script>