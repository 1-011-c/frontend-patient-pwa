import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { MdApp, MdToolbar, MdButton, MdIcon, MdCard } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default-dark.css'

Vue.config.productionTip = false

Vue.use(MdApp)
Vue.use(MdToolbar)
Vue.use(MdButton)
Vue.use(MdIcon)
Vue.use(MdCard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
