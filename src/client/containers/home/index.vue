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
                                input#startconf-editor(type='text' placeholder='Search libraries, CI, Services..' onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search libraries, CI, Services..'")
                            .startconf-recommendation
                                ul
                        .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
            
            .container
                section.grid.startconfhelp
                    .p-0.col-10_xs-12(data-push-left='off-1_xs-0' data-push-right='off-1_xs-0')
                        router-link(to='/about') What is this
                        router-link(to='/getting-started') Getting Started 
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

// register component
Vue.component('partners', partners)
Vue.component('footer-nav', footer)

const conf_available = [
    { name: 'create dockerfile', link: '/conf/dockerfile', image: '/images/logos/docker.png' }
]

const conf_wip = [
    { name: 'create .travis.yml' , image: '/images/logos/travisci.png', link: '/conf/travis-ci' },
    { name: 'create Heroku Procfile' ,image: '/images/logos/heroku.png', link: '/conf/heroku-procfile' },
    { name: 'create circle CI configurattion',image: '/images/logos/circleci.png', link: 'circleci.html' },
    { name: 'create Linux Makefile', image: '/images/logos/linux-makefile.png', link: 'linux-makefile.html' },
    { name: 'create Jenkis Configuration', image: '/images/logos/jenkins.png', link: 'jenkins.html' },
    { name: 'create Gruntfile', image: '/images/logos/grunt.png', link: 'grunt.html' },
    { name: 'create gulpfile.js', image: '/images/logos/gulp.png', link: 'gulp.html' },
    { name: 'create bower ', image: '/images/logos/bower.png', link: 'bower.html' },
    { name: 'create webpack.config.js',image: '/images/logos/webpack.png', link: '/conf/webpack' }
]

export default {
    name: 'home',
    data() 
    {
        return {
            name: 'yussan',
            conf_available,
            conf_wip
        }
    }
}
</script>
