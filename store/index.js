import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 用户
import user from './modules/user.js'

export default new Vuex.Store({
	modules: {
		user
	}
})