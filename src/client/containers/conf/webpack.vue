<template lang='pug'>
transition(name='page-transition')
  div(v-if='start')
    subheader(
      name='Webpack'
      link='https://webpack.js.org/configuration/'
      title='Create Webpack.config.js'
      subtitle='Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser, yet it is also capable of transforming, bundling, or packaging just about any resource or asset. More about Webpack')
</template>
<script>
export default {
  name: 'webpack',
  data() {
    return {
      start: false
    }
  },

  created() {
    // set loading store to false
    setTimeout(() => {
        this.start = true 
    }, 50)
  }
}
</script>
