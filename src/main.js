import Vue from 'vue'
import App from './App.vue'
import {i18n} from './plugins/i18n'
import FlagIcon from 'vue-flag-icon'
import './assets/styles/styles.scss'



Vue.use(FlagIcon)

new Vue({
    i18n,
    el: '#app',
    render: h => h(App)
})
