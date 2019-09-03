import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import productList from './views/productList.vue'
import usercenter from './views/userCenter.vue'
import lunbo from "./components/Carousel.vue"
import login from "./components/RegLogin.vue"
<<<<<<< HEAD
// import product from "./components/product.vue"
=======
import details from "./views/Details.vue"
<<<<<<< HEAD
import aliyun from "./components/aliyun.vue"
import header from "./components/Head.vue"
import aliyun1 from "./components/aliyun copy.vue"
=======
>>>>>>> f4343636844ff4589d650e5f71728058c8d625a3
>>>>>>> f2dc6a456cd9022e8e88a9b6dc4c84f8b341a276

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
<<<<<<< HEAD
	// {
	// 	path: '/product',
	// 	name: 'product',
	// 	component: product
	// }
=======
	{
		path: '/details',
		name: 'details',
		component: details
	},
	{
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
	}
>>>>>>> f4343636844ff4589d650e5f71728058c8d625a3
  ]
})
