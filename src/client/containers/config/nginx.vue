<template lang='pug'>
transition(name='page-transition' v-if='start')
  .createconf
    subheader(
      name='Nginx'
      link='https://www.nginx.com/resources/glossary/nginx/'
      title='Create Conf Nginx'
      subtitle='Nginx is open source software for web serving, reverse proxying, caching, load balancing, media streaming, and more. ')
    section
      .container-md
        .grid
          .col-12
            .createconf-form 
              //- select app
              input-select(
                name='sel_app'
                label='TYPE APP TO SERVE'
                text='Automatically the next input will match the type of application you want to build.'
                :options='options'
                :formdata='formdata'
                :formvalidation='formvalidation'
                :handleChange='handleChangeText')
              //- end of select app

              //- form nodejs
              transition(name='fade' v-if='formdata.sel_app == 2')
                form-nodejs(
                :formdata='formdata'
                :formvalidation='formvalidation'
                :handleChange='handleChangeText')

              //- form php-fpm || php-hhvm
              transition(name='fade' v-if='formdata.sel_app == 0 || formdata.sel_app == 1')
                form-php(
                :formdata='formdata'
                :formvalidation='formvalidation'
                :handleChange='handleChangeText')

              //- logs
              input-checkbox(
                name='chk_log'
                label='LOGS'
                text='Declare where you want to save logs.'
                other_text='Use custom log'
                :handleChange='handleChangeCheck'
                :formdata='formdata'
                :formvalidation='formvalidation'
              )
              //- TODO: inline because is not reusable component
              .createconf-form-control(:class='{disabled: !formdata.chk_log}')
                .m-t-10
                  strong Access Log
                  input(name='txt_log_access' type='text' :value='formdata.txt_log_access' :disabled='!formdata.chk_log')
                .m-t-10
                  strong Error Log
                  input(name='txt_log_error' type='text' :value='formdata.txt_log_error' :disabled='!formdata.chk_log')
              //- end of logs

              //- server_name
              input-text(
                name='txt_servername'
                label='DOMAIN / SERVER NAME'
                text='Just write domain without http / https, or by default _'
                :formdata='formdata'
                :formvalidation='formvalidation'
                placeholder='for example: (domain.com www.domain.com)'
                :handleChange='handleChangeText'
              )
              //- end of server_name

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
                | {{ $store.state.config.loading ? 'Wait for it ...' : 'Generate nginx.conf' }}
          | &nbsp;
          button.btn.btn-lg.btn-white(
              type='button' 
              @click='formdata = defaultFormdata') 
              | Reset Data
          .m-sm

</template>
<script>
import Vue from 'vue'
import { router } from '../../index'
import subheader from '../../components/subheader.vue'
import select from '../../components/form/form-input-select.vue'
import checkbox from '../../components/form/form-input-checkbox.vue'
import text from '../../components/form/form-input-text.vue'
import formnodejs from '../../components/config/form-nginx-nodejs.vue'
import formphp from '../../components/config/form-nginx-php.vue'
import { saveConf, toggleLoading } from '../../store/actions'
import Validator from '../../helpers/form-validator'
import * as localStorage from '../../helpers/local-storage'

// component register
Vue.component('input-select', select)
Vue.component('input-text', text)
Vue.component('input-checkbox', checkbox)
Vue.component('subheader', subheader)
Vue.component('form-nodejs', formnodejs)
Vue.component('form-php', formphp)

const options = [
  'PHP - PHP FPM',
  'PHP - HHVM',
  'NODEJS',
  // 'PYTHON - UWSGI'
]

const defaultFormdata = {
  sel_app: '',
  chk_log: false,
  txt_log_error: '/var/log/app/app.error.log',
  txt_log_access: '/var/log/app/app.access.log',
  txt_servername: '_',
}

export default {
  name: 'conf_nginx',
  data() {
    return {
      start: false,
      defaultFormdata,
      formdata: defaultFormdata,
      formvalidation: {},
      validator: new Validator({'txt_servername': 'required'}),
      options
    }
  },
  methods: {
    submit() {
      this.formvalidation = this.validator.validate(this.formdata)

      if(this.formvalidation.isValid)
      {
          // form is valid
          // save conf to store
          this.$store.dispatch('saveConf', {
              type: 'nginx', 
              data: this.formdata
              })
          // redirect to result page
          setTimeout(() => {
              router.push({path: '/result/nginx'})
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
    },

    handleChangeCheck(e) {
      const { name } = e.target
      let nextformdata = this.formdata
      nextformdata[name] = !this.formdata[name]

      // custom checkbox handler
      if(name == 'chk_log') {
        nextformdata.txt_log_error = '/var/log/app/app.error.log'
        nextformdata.txt_log_access = '/var/log/app/app.access.log'
      }

      this.formdata = Object.assign({}, nextformdata)

      // save to localstorage
      this.saveFormdata()
    },

    handleChangeText(e) {
      const { name, value } = e.target
      let nextformdata = this.formdata
      nextformdata[name] = value

      this.formdata = Object.assign({}, nextformdata)
      
      // save to localstorage
      this.saveFormdata()
    },

    // save form data to localstorage
    saveFormdata() {
      localStorage.setData(`conf_nginx`, JSON.stringify(this.formdata))
    }
  },

  created() {
    console.info('config nginx is ready.')
    if(this.$store.state.config.loading === true) {
      this.$store.dispatch('toggleLoading', 'config')
    }

    // get data from local storage
    const dataLocal = localStorage.getData(`conf_nginx`)
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
