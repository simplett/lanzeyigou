
import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import productList from './views/productList.vue'
import userCenter from './views/userCenter.vue'
import lunbo from "./components/Carousel.vue"
import login from "./components/RegLogin.vue"
import aliyun from "./components/aliyun.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
	{
	  path: '/lunbo',
	  name: 'lunbo',
	  component: lunbo
  },
  {
	  path: '/productList',
	  name: 'productList',
	  component: productList
	},
	{
	  path: '/login',
	  name: 'login',
	  component: login
	},
	{
		path: '/aliyun',
		name: 'aliyun',
		component: aliyun
	  },
	  {
		  path: '/aliyun',
		  name: 'aliyun',
		  component: aliyun
		}
  ]
})
