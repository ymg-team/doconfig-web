<template lang='pug'>
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
              :formdata='formdata'
              :formvalidation='formvalidation'
              :options='options'
            )
            //- end of select app
            
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
            .createconf-form-control(v-bind:class='{disabled: !formdata.chk_log}')
              .m-t-10
                strong Access Log
                input(name='txt_log_access' type='text' :value='formdata.txt_log_access' :disabled='!formdata.chk_log')
              .m-t-10
                strong Error Log
                input(name='txt_log_error' type='text' :value='formdata.txt_log_error' :disabled='!formdata.chk_log')
            //- end of logs

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
import subheader from '../../components/subheader.vue'
import select from '../../components/form-input-select.vue'
import checkbox from '../../components/form-input-checkbox.vue'

// component register
Vue.component('input-select', select)
Vue.component('input-checkbox', checkbox)
Vue.component('subheader', subheader)

const options = [
  'PHP - PHP FPM',
  'PHP - HHVM',
  'NODEJS',
  'PYTHON - UWSGI'
]

const defaultFormdata = {
  chk_log: false,
  txt_log_error: '/var/log/app/app.error.log',
  txt_log_access: '/var/log/app/app.access.log'
}

export default {
  name: 'conf_nginx',
  data() {
    return {
      defaultFormdata,
      formdata: defaultFormdata,
      formvalidation: {},
      options
    }
  },
  methods: {
    submit() {
      console.info('form is submited...')
    },

    handleChangeCheck(e) {
      const { name } = e.target
      let nextformdata = this.formdata
      nextformdata[name] = !this.formdata[name]

      // custom checkbox handler
      if(name == 'chk_logs') {
        nextformdata.txt_log_error = '/var/log/app/app.error.log'
        nextformdata.txt_log_access = '/var/log/app/app.access.log'
      }

      return this.formdata = Object.assign({}, nextformdata)
    }
  },

  created() {
  }
}
</script>
