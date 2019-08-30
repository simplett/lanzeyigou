import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import productList from './views/productList.vue'
import lunbo from "./components/Carousel.vue"
import login from "./components/RegLogin.vue"

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
>>>>>>> 0bd9e5132af27ac7cdad58c8cf0e5fa846e23af6
	}
  ]
})
