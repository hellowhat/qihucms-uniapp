import Vue from 'vue'
import App from './App'

import home from './pages/home/index.vue'
Vue.component('home',home)

import mall from './pages/mall/index.vue'
Vue.component('mall',mall)

import publish from './pages/publish/index.vue'
Vue.component('publish',publish)

import notice from './pages/notice/index.vue'
Vue.component('notice',notice)

import my from './pages/my/index.vue'
Vue.component('my',my)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

import store from './store'
Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
	store
})
app.$mount()

 



