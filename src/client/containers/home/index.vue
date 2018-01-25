<template lang='pug'>
    span
        .homeconf 
            .startconf
                .container
                    section.grid.header 
                        .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
                            router-link(to='/')
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
                                        router-link(:to='n.link' style='display:block') {{ n.name }}

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

                partners(
                    title='Partners' 
                    subtitle='Thanks for all the parties bellow who have supported Doconfig' 
                    className='availableconf' 
                    :is_newtab='true'
                    :partners='data_partners'
                    )
        footer-nav
</template>

<script>
import Vue from 'vue'
import partners from '../../components/partners.vue'
import footer from '../../components/footer.vue'
import data_conf from '../../../../internals/data-conf'
import data_partners from '../../../../internals/data-partners'

// register component
Vue.component('partners', partners)
Vue.component('footer-nav', footer)

export default {
    name: 'home',
    data() {
        return {
            txt_search: '',
            recommendation: [],
            conf_available: data_conf.ready,
            conf_wip: data_conf.wip,
            data_partners
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
                this.recommendation = [{name: 'dockerfile', link: '/conf/dockerfile'}, {name: 'gitlab ci', link: '/conf/gitlab-ci'}]
            }else 
            {
                this.recommendation = []
            }
        }
    }
}
</script>
