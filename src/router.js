
import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import productList from './views/productList.vue'
import Details from "./views/Details.vue"
import aliyun from "./views/element.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
	{
	  path: '/details',
	  name: 'details',
	  component: Details
  },
  {
	  path: '/productList',
	  name: 'productList',
	  component: productList
	},
	{
		path: '/aliyun',
		name: 'aliyun',
		component: aliyun
	  }
  ]
})
