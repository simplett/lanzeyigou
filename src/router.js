import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
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
	  path: '/login',
	  name: 'login',
	  component: login
	}
  ]
})
