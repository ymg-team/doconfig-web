<template lang="pug">
  .container.config
    .grid
        .col-12 
            header.createconf
                h1 {{ title }}
                h2 {{ subtitle }}
                    a(href=link target="_blank") Readmore about {{ name }}
</template>

<script>
export default {
  name: 'subheader',
}
</script>
