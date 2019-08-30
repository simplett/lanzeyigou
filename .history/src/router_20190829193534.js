import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import index from './views/product-list.vue'
import lunbo from "./components/Carousel.vue"


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
  }
  
  ]
})
