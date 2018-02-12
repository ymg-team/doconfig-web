<template lang='pug'>
transition(name='page-transition')
    div(v-if="start")
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
                                    li(:class='recommendation_active == key ? \'active\' : \'\'' v-for='n, key in recommendation' :key='key') 
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
import { router } from '../../index'

// register component
Vue.component('partners', partners)
Vue.component('footer-nav', footer)

export default {
    name: 'home',
    data() {
        return {
            start: false,
            txt_search: '',
            recommendation_active: null,
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
                if(e.keyCode == 40)
                {
                    console.log(this.recommendation_active, this.recommendation.length)
                    // press bottom arrow : 40
                    if(this.recommendation_active == null){
                        this.recommendation_active = 0
                    }else if(this.recommendation_active < this.recommendation.length - 1 ){
                        this.recommendation_active ++
                    }

                }else if(e.keyCode == 38)
                {
                    // press up arrow : 38
                    console.log('up bottom...')
                    if(this.recommendation_active && (this.recommendation_active <= this.recommendation.length - 1)){
                        this.recommendation_active --
                    }

                }else if(e.keyCode == 13 && this.recommendation_active != null)
                {
                    // start transition
                    router.push({path: `/config/${this.recommendation[this.recommendation_active].name}`})
                }

                this.recommendation = [
                    {name: 'nginx', link: '/config/nginx'},
                    {name: 'dockerfile', link: '/config/dockerfile'}, 
                    {name: 'webpack', link: '/config/webpack'}
                    ]
            }else 
            {
                // reset recommendation and recommendation_active
                this.recommendation = []
                this.recommendation_active = null
            }
        }
    },
    created() {
        setTimeout(() => {
           this.start = true 
        }, 50);
    }
}
</script>
