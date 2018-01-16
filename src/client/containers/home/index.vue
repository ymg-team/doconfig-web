<template lang="pug">
    - 
        let wipconf = [
            {src: 'images/logos/travisci.png', href: 'travici.html'},
            {src: 'images/logos/heroku.png', href: 'heroku.html'},
            {src: 'images/logos/circleci.png', href: 'circleci.html'},
            {src: 'images/logos/linux-makefile.png', href: 'linux-makefile.html'},
            {src: 'images/logos/jenkins.png', href: 'jenkins.html'},
            {src: 'images/logos/grunt.png', href: 'grunt.html'},
            {src: 'images/logos/gulp.png', href: 'gulp.html'},
            {src: 'images/logos/bower.png', href: 'bower.html'},
            {src: 'images/logos/webpack.png', href: 'webpack.html'}
        ]
    .homeconf 
        .startconf
            .container
                section.grid.header 
                    .p-0.col-10_xs-12(data-push-left="off-1_xs-0" data-push-right="off-1_xs-0")
                        a(href="/")
                            img(src="/images/logo-header-white.png")
                section.grid
                    .p-0.col-10_xs-12(data-push-left="off-1_xs-0" data-push-right="off-1_xs-0")
                        .startconf-editor
                            p What you want to config ?
                            input#startconf-editor(type="text" placeholder="Search libraries, CI, Services.." onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search libraries, CI, Services..'")
                        .startconf-recommendation
                            ul
                    .p-0.col-10_xs-12(data-push-left="off-1_xs-0" data-push-right="off-1_xs-0")
        .container
            section.grid.startconfhelp
                .p-0.col-10_xs-12(data-push-left="off-1_xs-0" data-push-right="off-1_xs-0")
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

            section.wipconf.grid 
                .col-12
                    h2.title Config In Progress
                    p.subtitle Get ready for the upcoming configurations on DoConfig
                .col-12 
                    each n, key in wipconf
                        a.logo-partner(href=n.href)
                            img(src=n.src)

                .col-12 
                    a.btn-more-conf.fa.fa-chevron-down(href="javascript:;")
</template>

<script>
import Vue from 'vue'
import partners from '../../components/partners.vue'

// register component
Vue.component('partners', partners)

const conf_available = [
    { name: 'create dockerfile', link: '/conf/dockerfile', image: '/images/logos/docker.png' }
]

const conf_wip = [
    { name: 'create Travis CI configuration' , image: '/images/logos/travisci.png', link: 'travici.html' },
    { name: 'create heroku configuration' ,image: '/images/logos/heroku.png', link: 'heroku.html' },
    { name: 'create circle CI configurattion',image: '/images/logos/circleci.png', link: 'circleci.html' },
    { name: 'create Linux Makefile', image: '/images/logos/linux-makefile.png', link: 'linux-makefile.html' },
    { name: 'create Jenkis Configuration', image: '/images/logos/jenkins.png', link: 'jenkins.html' },
    { name: 'create Gruntfile', image: '/images/logos/grunt.png', link: 'grunt.html' },
    { name: 'create gulpfile.js', image: '/images/logos/gulp.png', link: 'gulp.html' },
    { name: 'create bower ', image: '/images/logos/bower.png', link: 'bower.html' },
    { name: 'create webpack.config.js',image: '/images/logos/webpack.png', link: 'webpack.html' }
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
