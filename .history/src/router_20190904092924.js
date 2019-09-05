import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import productList from './views/productList.vue'
import usercenter from './views/userCenter.vue'
import lunbo from "./components/Carousel.vue"
import login from "./components/RegLogin.vue"
import focus from "./components/focus.vue"
// import product from "./components/product.vue"
import details from "./views/Details.vue"
import aliyun from "./components/aliyun.vue"
import header from "./components/Head.vue"
import aliyun1 from "./components/aliyun copy.vue"
import fdj from "./components/fadajing.vue"
import fdj from "./components/fadajing.vue"

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
		path: '/usercenter',
		name: 'usercenter',
		component: usercenter
	},
	// {
	// 	path: '/product',
	// 	name: 'product',
	// 	component: product
	// }
	{
		path: '/details',
		name: 'details',
		component: details
	},
	{
		path: '/focus',
		name: 'focus',
		component: focus,
		path: '/aliyun',
		name: 'aliyun',
		component: aliyun
	},
	{
		path: '/aliyun1',
		name: 'aliyun1',
		component: aliyun1
	},
	{
		path: '/header',
		name: 'header',
		component: header
	},
	{
		path: '/fdj',
		name: 'fdj',
		component: fdj
	}
  ]
})
