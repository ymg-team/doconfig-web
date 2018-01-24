<template lang="pug">
  .container
    footer.grid
      .col-12
        hr
      .col-9
        ul.horizontal-list.text-left
          li(style='font-size:.9em;color:#808080;')
            strong DoConfig © 2017
          li
            router-link(to='/about') About
          li
            router-link(to='/how-to-use') How to Use
          li
            a(href='https://goo.gl/forms/1BlVNi9Sx0KDgO992' target='_blank') Contact
          li
            router-link(to='/terms-and-conditions') Terms and Conditions
          li
            router-link(to='/privacy-policy') Privacy Policy
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
