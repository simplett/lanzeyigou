import Vue from 'vue'
import Router from 'vue-router'
import index from './views/index.vue'
import productList from './views/productList.vue'
import usercenter from './views/userCenter.vue'
import login from "./components/RegLogin.vue"
import collect from "./components/collect.vue"
// import product from "./components/Comment.vue"
import details from "./views/Details.vue"
import searchlist from "./views/SearchList.vue"
import paysuccess from "./views/paysuccess.vue"
import publish from "./views/Publish.vue"
import aliyun from "./components/aliyun.vue"
import header from "./components/Head.vue"
import aliyun1 from "./components/aliyun copy.vue"
import otherperson from "./views/otherperson.vue"
import personcenter from "./components/personcenter.vue"
import RegLogin1 from "./components/RegLogin.1.vue"
import chat from "./components/Chat.1.vue"
import order from "./views/Order.vue"

Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/publish',
			name: 'publish',
			component: publish
		},
		{
			path: '/productList',
			name: 'productList',
			component: productList
		},
		{
			path: '/order',
			name: 'order',
			component: order
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
		{
			path: '/chat',
			name: 'chat',
			component: chat
		},
		{
			path: '/details',
			name: 'details',
			component: details,
			// props:true,
		},
		{
			path: '/collect',
			name: 'collect',
			component: collect,
		}, {
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
			path: '/personcenter',
			name: 'personcenter',
			component: personcenter
		},
		{
			path: '/searchlist',
			name: 'searchlist',
			component: searchlist
		},
		{
			path: '/otherperson',
			name: 'otherperson',
			component: otherperson
		},
		{
			path: '/paysuccess',
			name: 'paysuccess',
			component: paysuccess
		},
		{
			path: '/RegLogin1',
			name: 'RegLogin1',
			component: RegLogin1
		}
	],
	scrollBehavior(to, from, savedPosition) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					x: 0,
					y: 0
				})
			}, 10)
		})
	}
})
