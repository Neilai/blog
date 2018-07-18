import '@/assets/style/index.scss'
import Vue from 'vue'
import App from '@/App'
import router from './router'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:3000'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

Vue.prototype.$axios= axios
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {App}
})
