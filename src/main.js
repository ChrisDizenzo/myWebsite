import Vue from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTypedJs from 'vue-typed-js'


Vue.use(VueTypedJs)
AOS.init()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
