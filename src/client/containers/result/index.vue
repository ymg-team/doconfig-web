<template lang='pug'>
.createconf
    //- subheader
    subheader(
            name='Dockerfile'
            link='https://docs.docker.com/engine/reference/builder/'
            title='Create Dockerfile'
            subtitle='Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession. More about Dockerfile')

    section
        .container-md
            .grid
                .col-12.p-b-0
                    .createconf-form 
                        //- image
                        .createconf-form-control
                            label
                                a.fa.fa-chevron-left(style="margin-right:10px;font-size:28px" href="dockerfile.html" title="back to create Dockerfile") 
                                | Dockerfile Result
                            code 
                                | FROM node:6.9.1-slim
                                br
                                | MAINTAINER https://doconfig.com/report
                                br
                                | RUN export DEBIAN_FRONTEND=noninteractive && set -x \
                                br
                                | && npm install -g nodemon \
                                br
                                | && mkdir -p /usr/src/app
                                br
                                | WORKDIR /usr/src/app
                                br
                                | COPY package.json /usr/src/app
                                br
                                | COPY . /usr/src/app
                                br
                                | EXPOSE 8080
                                br
                                | CMD ["npm","start"]

            //- generate button
            .align-center
                button.btn.btn-lg.btn-blue(type='button') Download
                | &nbsp;
                button.btn.btn-lg.btn-white(type='button' onclick='dc.alert.open("success", "Dockerfile is copied to clipboard")') Copy to Clipboard
                .m-sm
                                
</template>
<script>
import Vue from 'vue'
import subheader from '../../components/subheader.vue'

// register component
Vue.component('subheader', subheader)

export default {
  name: 'result-page'
}
</script>
