<template lang='pug'>
.createconf-form-control
  label {{ label }}
  small 
      //- text in html typing
      span(v-html='text')
  input(
    type='text' 
    :name='name'
    v-on:keyup='handleChange'
    :value='value'
    :placeholder='placeholder')
  
  //- is recommendations available
  .recommendation(:v-if='recommendations.length > 0')
    ul(style='padding:0;margin-top:-.1em') 
      li(style='list-style:none;padding:.5em;background:#2cb5e8;margin-bottom:.2em' 
        v-for='(n, index) in recommendations') 
        a(
          href='javascript:;' 
          style='color:#236f90' 
          v-on:click='() => handleRecommendations(name, n)') 
          | {{ n }}
  //- end of recommendations

  //- is childs available
  .commands
    .command(
      title='click to remove' 
      class='command' 
      v-for='(n, index) in childs' 
      style='margin-right:.4em'
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
    text: {
      type: String
    },
    placeholder: {
      type: String
    },
    recommendations: {
      type: Array,
      default: () => {
        return []
      }
    },
    childs: {
      type: Array,
      default: () => {
        return []
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
    },
    name: {
      type: String
    },
    value: {
      type: String
    }
  }

export default {
  name: 'form-input-text',
  // props validation
  props,
  // methods declaration
  methods: {
    
  },
  created() {
  }
}
</script>