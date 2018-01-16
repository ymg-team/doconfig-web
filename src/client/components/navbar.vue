<template lang="pug">
  nav.header
    .container
        .grid
            .p-0.col-12
                router-link.logo(to="/")
                    img(src="/images/logo-header-white.png")
                ul.horizontal-list 
                    li 
                        router-link(to="/") Start Config
                    li.active 
                        router-link(to="/blog") Blog
</template>
<script>
export default {
  name: 'navbar'
}
</script>
