import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTypedJs from 'vue-typed-js'
var VueScrollTo = require('vue-scrollto');
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faPhoneSquareAlt, faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'


library.add(faUserSecret)
library.add(faPhoneSquareAlt)
library.add(faLinkedin)
library.add(faEnvelopeSquare)



Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueScrollTo)

Vue.use(VueTypedJs)
AOS.init()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
