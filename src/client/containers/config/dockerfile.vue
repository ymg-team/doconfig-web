<template lang='pug'>
transition(name='page-transition' v-if='start')
    .createconf
        subheader(
            name='Dockerfile'
            link='https://docs.docker.com/engine/reference/builder/'
            title='Create Dockerfile'
            subtitle='Docker can build images automatically by reading the instructions from a Dockerfile. A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image. Using docker build users can create an automated build that executes several command-line instructions in succession. More about Dockerfile')
        section
        .container-md
            .grid
                .col-12
                    .createconf-form 
                        //- image
                        input-text(
                            name='txt_image'
                            label='IMAGE FROM *' 
                            text='<strong>IMAGE</strong> is based on <a href=\'https://hub.docker.com/\' target=\'blank\'>Docker Hub</a>'
                            placeholder='example: ubuntu, nodejs-slim'
                            :formdata='formdata'
                            :formvalidation='formvalidation'
                            :handleRecommendations='handleRecommendations'
                            :handleChange='handleChangeText'
                            )

                        //- workdir
                        input-text(
                            name='txt_workdir'
                            label='DOMAIN / SERVER NAME *' 
                            text='Just write domain without http / https, or by default _'
                            placeholder='example: /app'
                            :formdata='formdata'
                            :handleChange='handleChangeText'
                            )

                        //- copy
                        input-text(
                            name='txt_copy'
                            label='COPY' 
                            text='<strong>COPY</strong> Make sure to write command in sequentially.'
                            placeholder='example: /target /destination (and press enter)'
                            :formdata='formdata'
                            :formvalidation='formvalidation'
                            :handleChange='handleChangeText'
                            :handleRemoveChild='handleRemoveChild'
                            )

                        //- run
                        input-text(
                            name='txt_run'
                            label='RUN' 
                            text='<strong>RUN</strong> actually runs a command and commits the result. Make sure to write command in sequentially.'
                            placeholder='example: apt-get update -y (and press enter)'
                            :formdata='formdata'
                            :handleChange='handleChangeText'
                            :handleRemoveChild='handleRemoveChild'
                            )

                        //- expose port
                        input-text(
                            name='txt_expose'
                            label='EXPOSE' 
                            text='The <strong>EXPOSE</strong> instruction informs Docker that the container listens on the specified network ports at runtime. You can specify whether the port listens on TCP or UDP, and the default is TCP if the protocol is not specified.'
                            placeholder='example: originport exposeport (and press enter)'
                            :formdata='formdata'
                            :handleChange='handleChangeText'
                            :handleRemoveChild='handleRemoveChild'
                            )

                        //- CMD
                        input-text(
                            name='txt_cmd'
                            label='CMD *' 
                            text='<strong>RUN&nbsp;</strong>There can only be one <strong>CMD </strong>instruction in a Dockerfile. If you list more than one <strong>CMD </strong>then only the last <strong>CMD </strong>will take effect.'
                            placeholder='example: npm run start'
                            :formdata='formdata'
                            :formvalidation='formvalidation'
                            :handleChange='handleChangeText'
                            )

            //- generate button
            //- @click = v-on:click
            .align-center
                button.btn.btn-lg.btn-white(
                    title='for now is not yet available'
                    type='button' disabled) 
                    | Save to Dashboard
                | &nbsp;
                button.btn.btn-lg.btn-white(
                    type='button' 
                    @click='submit' 
                    :disabled='$store.state.config.loading') 
                    | {{ $store.state.config.loading ? 'Wait for it ...' : 'Generate Dockerfile' }}
                | &nbsp;
                button.btn.btn-lg.btn-white(
                    type='button' 
                    @click='formdata = {}') 
                    | Reset Data
                .m-sm
</template>

<script>
import Vue from 'vue'
import { router } from '../../index'
import subheader from '../../components/subheader.vue'
import inputtext from '../../components/form/form-input-text.vue'
import { saveConf, toggleLoading } from '../../store/actions'
import Validator from '../../helpers/form-validator'
import * as localStorage from '../../helpers/local-storage'

// register components
Vue.component('subheader', subheader)
Vue.component('input-text', inputtext)

export default {
    name: 'conf_dockerfile',
    data() {
        return {
            start: false,
            formdata: {},
            formvalidation: {},
            validator: new Validator({'txt_image': 'required', 'txt_cmd': 'required'})
        }
    },

    methods: {
        // mapActions
        
        // handle change input text
        handleChangeText(e) {
            const { name, value } = e.target
            let nextformdata = this.formdata
            
            // get recomendations
            if(['txt_image'].includes(name))
            {
                if(value != '')
                    nextformdata[`rec_${name}`] = ['Nodejs:slim', 'Ubuntu 19.04', 'Google weblight']
                else 
                    nextformdata[`rec_${name}`] = []
            }
            
            // push childs 
            if(['txt_run', 'txt_copy'].includes(name) && e.keyCode == 13 && value != '')
            {
                // reset input value
                nextformdata[name] = ''
                // push data
                if(!nextformdata[`childs_${name}`]) 
                    nextformdata[`childs_${name}`] = []
                nextformdata[`childs_${name}`].push(value)

                this.formdata = Object.assign({}, nextformdata)
                this.formvalidation = this.validator.validate(this.formdata)
                return true
            }

            // mutated input value by name      
            nextformdata[name] = value
            this.formdata = Object.assign({}, nextformdata)
            this.formvalidation = this.validator.validate(this.formdata)
        },

        // remove childs by key and input name
        handleRemoveChild(name, key) {
            // splice array by key
            this.formdata[`childs_${name}`].splice(key, 1)
        },

        //   on click recommendations
        handleRecommendations(name, val) {
            // reset recommendations
            this.formdata[`rec_${name}`] = []
            // set input value by name and selected recommentaion
            this.formdata[name] = val
        },

        // on input text change
        submit() {
            // start form validation
            this.formvalidation = this.validator.validate(this.formdata)

            if(this.formvalidation.isValid)
            {
                // form is valid
                // save conf to store
                // ps : only 1 params can support dispatch
                this.$store.dispatch('saveConf', {
                    type: 'dockerfile', 
                    data: this.formdata
                    })
                // redirect to result page
                setTimeout(() => {
                    router.push({path: '/result/dockerfile'})
                }, 200)
            }else 
            {
                // scroll to the top .error 
                setTimeout(() => {
                    document.getElementsByClassName('error')[0].scrollIntoView({ 
                    behavior: 'smooth' 
                    })
                }, 50)
                // form is not valid
                dc.alert.open('warning', 'Sorry, your form input is not valid please check again', true)

            }
        }
    },

    created() {
        console.log('conf dockerfile is ready to use...')
        if(this.$store.state.config.loading === true) {
            this.$store.dispatch('toggleLoading', 'config')
        }

        // set data from local storage
        const dataLocal = localStorage.getData(`conf_dockerfile`)
        if(dataLocal) {
            // set store from local storage
            this.formdata = JSON.parse(dataLocal)
        }
        
        // set loading store to false
        setTimeout(() => {
            this.start = true 
        }, 50)
    }
}
</script>
