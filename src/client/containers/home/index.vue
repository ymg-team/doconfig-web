<template lang="pug">
    - 
        let readyconf = [
            {src: 'images/logos/docker.png', href: 'dockerfile.html', to: '/conf/dockerfile'}
        ]
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
                    a(href="") What is this
                    a(href="") Getting Started 
                    a(href="") Request Conf
                    a(href="") Found Bug
        .container 
            section.availableconf.grid 
                .col-12
                    h2.title Available Config
                    p.subtitle Here are some configurations you can create in DoConfig

                .col-12 
                    each n, key in readyconf
                        router-link.logo-partner(to=n.to)
                            img(src=n.src)
                .col-12 
                    a.btn-more-conf.fa.fa-chevron-down(href="javascript:;")

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
export default {
    name: 'Home',
    data() 
    {
        return {
            user:'asd'
        }
    },

    create() 
    {
        console.log('ready')
    },

    
}
</script>
