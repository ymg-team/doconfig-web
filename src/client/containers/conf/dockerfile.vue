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
                            :value='txt_image'
                            :recommendations='rec_txt_image'
                            :handleRecommendations='handleRecommendations'
                            :handleChange='handleChangeText'
                            )

                        //- run
                        input-text(
                            name='txt_run'
                            label='RUN' 
                            text='<strong>RUN</strong> actually runs a command and commits the result. Make sure to write command in sequentially.'
                            placeholder='example: apt-get update -y (and press enter)'
                            :value='txt_run'
                            :handleChange='handleChangeText'
                            :handleRemoveChild='handleRemoveChild'
                            :childs='childs_txt_run'
                            )

                        //- copy
                        input-text(
                            name='txt_copy'
                            label='COPY' 
                            text='<strong>COPY</strong> Make sure to write command in sequentially.'
                            placeholder='example: /target /destination'
                            :value='txt_copy'
                            :handleChange='handleChangeText'
                            :handleRemoveChild='handleRemoveChild'
                            :childs='childs_txt_copy'
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
            .align-center
                button.btn.btn-lg.btn-white(
                    type='button' 
                    v-on:click='submit' 
                    :disabled='is_loading') 
                    | {{ is_loading ? 'Wait for it ...' : 'Generate Dockerfile' }}
                .m-sm
</template>

<script>
import Vue from 'vue'
import subheader from '../../components/subheader.vue'
import inputtext from '../../components/form-input-text.vue'

// register components
Vue.component('subheader', subheader)
Vue.component('input-text', inputtext)

export default {
    name: 'conf_dockerfile',
    data() {
        return {
            is_loading: false,
            rec_txt_image: [],
            childs_txt_run: [],
            childs_txt_copy: [],
            txt_image: '',
            txt_copy: '',
            txt_run: '' 
        }
    },

    methods: {
        // handle change input text
        handleChangeText(e) {
            const { name, value } = e.target
            
            // get recomendations
            if(['txt_image'].includes(name))
            {
                if(value != '')
                    this[`rec_${name}`] = ['Nodejs:slim', 'Ubuntu 19.04', 'Google weblight']
                else 
                    this[`rec_${name}`] = []
            }
            
            // push childs 
            if(['txt_run', 'txt_copy'].includes(name) && e.keyCode == 13 && value != '')
            {
                // reset input value
                this[name] = ''
                // push data
                this[`childs_${name}`].push(value)

                return true
            }

            // mutated input value by name      
            this[name] = value
        },
        // remove childs by key and input name
        handleRemoveChild(name, key) {
            console.log(this[`childs_${name}`][key])
            // splice array by key
            this[`childs_${name}`].splice(key, 1)
        },
        //   on click recommendations
        handleRecommendations(name, val) {
            // reset recommendations
            this[`rec_${name}`] = []
            // set input value by name and selected recommentaion
            this[name] = val
        },
        // on input text change
        submit(e) {
            this.is_loading = true
        }
    },

    created() {

    }
}
</script>
