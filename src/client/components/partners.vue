<template lang='pug'>
  section.grid( :class='className' ) 
    .col-12
        h2.title {{ title }}
        p.subtitle {{ subtitle }}

    .col-12 
        span(v-for='(n, key) in partners')
            //- solved from : https://vuejs.org/v2/api/#v-bind
            router-link.logo-partner(:to='n.link' :title='n.name')
                img( :src='n.image' )
    .col-12 
        a.btn-more-conf.fa.fa-chevron-down(href="javascript:;")
</template>
<script>
export default {
    name: 'partners-card',
    props: ['title', 'subtitle', 'partners', 'className']
}
</script>