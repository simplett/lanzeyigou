
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
import Reglogin from "./components/RegLogin.1.vue"
=======
import card from "./components/card.vue"
>>>>>>> 9286b48ae76415b92628fb0fc401235b4f537f4e
Vue.use(ElementUI)
axios.defaults.baseURL = "http://120.79.19.253:10086"
// axios.defaults.baseURL = "http://10.1.180.146:8080"
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.$=jQuery;
Vue.prototype.$md5 = md5                                                                                                            
Vue.prototype.uploadEnclosure = function (files, cb) {
 
          console.log(files)
          var file = files.target.files[0]; //获取要上传的文件对象
          var url = this.ServerIp + this.API.getTSTToken;
          this.$http({
              method: 'post',
              url: url
          }).then((res) => {
 
              console.log(res);
              var client = new OSS.Wrapper({
                  region: this.OssRegion,
                  accessKeyId:"LTAIlbkoZl60gNWT",
                  accessKeySecret:"CbVR0tmpKXqAIEXxavJDqad3lcIIez",
                  // stsToken: res.data.result.SecurityToken,
                  bucket: "simplett-productlist-img.oss-cn-beijing.aliyuncs.com"
              });
 
              var fileName = Date.parse(new Date());
              var fileExt = file.name.toLowerCase().split('.').splice(-1);
              var randStr = this.randomString(6);
              var newFilename = fileName + "-" + randStr + "." + fileExt[0];
 
              client.multipartUpload("2017/" + newFilename, file).then(function (result) {
                  console.log(result);
                  cb(true, result);
              }).catch(function (err) {
                  console.log(err);
                  cb(false, "上传附件失败");
              });
          });
 

      }
Vue.component(
	"my-header",myheader,
)
Vue.component(
	"my-foot",myfoot
)
Vue.component(
	"reg-login",Reglogin
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
