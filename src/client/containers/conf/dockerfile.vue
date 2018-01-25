<template lang='pug'>
  span
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
                            label='IMAGE FROM' 
                            text='<strong>IMAGE</strong> is based on <a href=\'https://hub.docker.com/\' target=\'blank\'>Docker Hub</a>'
                            placeholder='example: ubuntu, nodejs-slim'
                            :formdata='formdata'
                            :handleRecommendations='handleRecommendations'
                            :handleChange='handleChangeText'
                            )

                        //- workdir
                        input-text(
                            name='txt_workdir'
                            label='WORKDIR' 
                            text='<strong>WORKDIR</strong> is based on <a href=\'https://hub.docker.com/\' target=\'blank\'>Docker Hub</a>'
                            placeholder='example: ubuntu, nodejs-slim'
                            :formdata='formdata'
                            :handleChange='handleChangeText'
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

                        //- copy
                        input-text(
                            name='txt_copy'
                            label='COPY' 
                            text='<strong>COPY</strong> Make sure to write command in sequentially.'
                            placeholder='example: /target /destination'
                            :formdata='formdata'
                            :handleChange='handleChangeText'
                            :handleRemoveChild='handleRemoveChild'
                            )

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
                            
                            input(type='text' placeholder='example: apt-get update -y')

                            //- list setup command
                            .commands.active
                                each n in ['/var/www/app/run.sh']
                                    .command(title='click to delete')
                                        | CMD: #{n}

            //- generate button
            //- @click = v-on:click
            .align-center
                button.btn.btn-lg.btn-white(
                    type='button' 
                    @click='submit' 
                    :disabled='$store.state.config.loading') 
                    | {{ $store.state.config.loading ? 'Wait for it ...' : 'Generate Dockerfile' }}
                .m-sm
</template>

<script>
import Vue from 'vue'
import { router } from '../../index'
import subheader from '../../components/subheader.vue'
import inputtext from '../../components/form-input-text.vue'
import { saveConf } from '../../store/actions'

// register components
Vue.component('subheader', subheader)
Vue.component('input-text', inputtext)

export default {
    name: 'conf_dockerfile',
    data() {
        return {
            formdata: {}
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

                return this.formdata = Object.assign({}, nextformdata)
            }

            // mutated input value by name      
            nextformdata[name] = value
            return this.formdata = Object.assign({}, nextformdata)
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
        submit(e) {
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
        }
    },

    created() {
        console.log('conf dockerfile is ready to use...')
    }
}
</script>
