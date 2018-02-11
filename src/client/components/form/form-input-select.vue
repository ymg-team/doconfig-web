<template lang='pug'>
.createconf-form-control
  label TYPE APP TO SERVE
  small Automatically the next input will match the type of application you want to build. 
  select.fullwidth(:name='name' @change='handleChange' :value='formdata[name]')
    option(value='') -- Choose one / nothing
    //- maping options props
    option(v-for='(n, index) in options' :value='index') {{n}}
    //- end of maping options props
  .error-message
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
    value: {
      type: Number
    },
    options: {
      type: Array,
      default: () => {
        return []
      }
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
  name: 'form-input-select',
  props
}
</script>

