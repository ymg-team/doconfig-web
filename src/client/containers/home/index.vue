<template lang='pug'>
    span
        .homeconf 
            .startconf
                .container
                    section.grid.header 
                        .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
                            a(href='/')
                                img(src='/images/logo-header-white.png')
                    section.grid
                        .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
                            .startconf-editor
                                p What you want to config ?
                                input#startconf-editor(
                                    type='text' 
                                    placeholder='Search libraries, CI, Services..' 
                                    onfocus="this.placeholder = ''" 
                                    onblur="this.placeholder = 'Search libraries, CI, Services..'"
                                    v-model='txt_search'
                                    v-on:keyup='handleChangeTxt')
                            .startconf-recommendation
                                transition-group(name='animate-list' tag='ul')
                                    //- mapping recomendations
                                    li(v-for='n, key in recommendation' :key='key') 
                                        router-link(:to='n.link') {{ n.name }}

                        .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
            
            .container
                section.grid.startconfhelp
                    .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
                        router-link(to='/about') What is this
                        router-link(to='/how-to-use') Getting Started 
                        router-link(to='/request') Request Conf
                        router-link(to='/report') Found Bug
            
            .container 
                partners(
                    title='Available Config' 
                    subtitle='Here are some configurations you can create in DoConfig' 
                    className='availableconf' 
                    :partners='conf_available'
                    )
                
                partners(
                    title='Config In Progress' 
                    subtitle='Get ready for the upcoming configurations on DoConfig' 
                    className='wipconf' 
                    :partners='conf_wip'
                    )
        footer-nav
</template>

<script>
import Vue from 'vue'
import partners from '../../components/partners.vue'
import footer from '../../components/footer.vue'
import conf from '../../../../internals/conf'

// register component
Vue.component('partners', partners)
Vue.component('footer-nav', footer)

export default {
    name: 'home',
    data() {
        return {
            txt_search: '',
            recommendation: [],
            conf_available: conf.ready,
            conf_wip: conf.wip
        }
    },
    methods: {
        // handle input type change
        handleChangeTxt(e) {
            console.log('press code : ', e.keyCode)
            if(this.txt_search != '')
            {
                // press bottom arrow : 40

                // press up arrow : 38
                this.recommendation = [{name: 'rec 1', link: '/'}]
            }else 
            {
                this.recommendation = []
            }
        }
    }
}
</script>
