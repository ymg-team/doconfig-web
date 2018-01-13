<template lang="pug">
  span
    navbar
    .createconf
      subheader(
        name="Dockerfile"
        link="https://docs.docker.com/engine/reference/builder/"
        title="Create Dockerfile" 
        subtitle="Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession. More about Dockerfile")
      section
        .container-md
            .grid
                .col-12
                    .createconf-form 
                        //- image
                        .createconf-form-control
                            label IMAGE FROM 
                            small 
                                strong IMAGE&nbsp;
                                | is based on 
                                a(href="https://hub.docker.com/" target="_blank") Docker Hub
                            input(type='text' placeholder='for example: ubuntu, nodejs-slim')

                        //- run
                        .createconf-form-control
                            label RUN 
                            small 
                                strong RUN&nbsp;
                                | Actually runs a command and commits the result. Make sure to write command in sequentially.
                        
                        
                            input(type='text' placeholder='for example: apt-get update -y')

                            //- list setup command
                            .commands
                                each n in ['apt-get update -y && apt-get autoremove -y', 'apt-get install -y supervisor', 'apt-get autoremove -y', 'build ./cfg/maxready', 'powerless infrared -p mask']
                                    .command
                                        | RUN: #{n}
                        //- sample empty run 
                        .createconf-form-control
                            label RUN (sample if empty)
                            small
                                strong RUN&nbsp;
                                | Actually runs a command and commits the result. Make sure to write command in sequentially.
                            
                            input(type='text' placeholder='for example: apt-get update -y')

                            .commands

                        //- copy
                        .createconf-form-control
                            label COPY
                            small Make sure to write command in sequentially
                            
                            .grid 
                                .col-6.p-0.m-b-0
                                    p.m-b-0 Source 
                                    input(type='text' placeholder='example: /src/data') 
                                .col-6.p-0.m-b-0
                                    p.m-b-0 Destination 
                                    input(type='text' placeholder='example: /var/www/data')
                            .commands
                                each n in ['"/dist" "/home/user/web"']
                                    .command(title="click to delete")
                                        | COPY: #{n}

                        //- CMD
                        .createconf-form-control.commands-form-control
                            label CMD 
                            small 
                                strong RUN&nbsp;
                                | There can only be one 
                                strong CMD 
                                | instruction in a Dockerfile. If you list more than one 
                                strong CMD 
                                | then only the last 
                                strong CMD 
                                | will take effect.
                            
                            input(type='text' placeholder='for example: apt-get update -y')

                            //- list setup command
                            .commands.active
                                each n in ['/var/www/app/run.sh']
                                    .command(title="click to delete")
                                        | CMD: #{n}

            //- generate button
            .align-center
                button.btn.btn-lg.btn-white(type='button' onclick="return location.href='dockerfile-submit.html'") Generate Dockerfile
                .m-sm
</template>

<script>
import Vue from 'vue'
import navbar from '../../components/navbar.vue'
import subheader from '../../components/subheader.vue'

// register components
Vue.component('navbar', navbar)
Vue.component('subheader', Object.assign(subheader, {
  data: {
    title: 'Create Dockerfile'
  }
}))

export default {
  name: 'dockerfile'
}
</script>
