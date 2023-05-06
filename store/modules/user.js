export default {
	state: {
		token: '', // token
		userInfo: {}, // 用户信息
	},
	
	getters: {
		// 读取token
		getToken: state => {
			return state.token
		},
		
		// 读取用户信息
		getUserInfo: state => {
			return state.userInfo
		}
	},
	
	mutations: {
		// 一旦进入了小程序，就需要执行这个方法，把用户信息读出来
		initUser(state) {
			let userInfo = uni.getStorageInfoSync('userInfo')
			if (userInfo) {
				userInfo = JSON.parse(userInfo)
				state.userInfo = userInfo
				state.token = userInfo.token
			}
		},
		
		// 登录后保存用户信息
		login(state, userInfo) {
			state.userInfo = userInfo
			state.token = userInfo.token
			uni.setStorageSync('userInfo', JSON.stringify(userInfo))
		},
		
		// 退出登录
		loginOut(state) {
			state.userInfo = {}
			state.token = ''
			// 删除本地存储的信息
			uni.removeStorageSync('userInfo')
		}
	},
	
	actions: {}
}


