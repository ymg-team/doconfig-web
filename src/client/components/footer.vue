<template lang="pug">
  .container
    footer.grid
      .col-12
        hr
      .col-9
        ul.horizontal-list.text-left
          li(style='font-size:.9em;color:#808080;')
            | DoConfig © 2017 IdMore Team
          li
            router-link(to='/about') About
          li
            router-link(to='/how-to-use') How to Use
          li
            router-link(to='/contact') Contact
          li
            router-link(to='/terms-of-service') Term of service
          li
            router-link(to='/blog') Blog
      .col-3
        ul.horizontal-list.text-right
          li
            a(href='https://byidmore.com', target='_blank')
              strong Powered By IdMore

</template>
<script>
export default {
  name: 'footer-nav'
}
</script>
