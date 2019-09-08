
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import md5 from "js-md5"
import VueAxios from 'vue-axios'
import jQuery from "jquery"
import myfoot from "./components/MyFoot.vue"
import myheader from "./components/MyHeader.vue"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import search from "./components/search.vue"
import Carousel from "./components/Carousel.vue"
import product from "./components/product.vue"
Vue.use(ElementUI)
axios.defaults.baseURL = "http://120.79.19.253:10086"
// axios.defaults.baseURL = "http://10.1.180.146:8080"
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.$=jQuery;
Vue.prototype.$md5 = md5
Vue.component(
	"my-header",myheader,
)
Vue.component(
	"my-foot",myfoot
)
Vue.component(
	"search",search
)
Vue.component(
	"Carousel",Carousel
)
Vue.component(
	"Product",product
)

Vue.config.productionTip = false
new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
