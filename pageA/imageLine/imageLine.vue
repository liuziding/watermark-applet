<template>
	<view class="image-link">
		<view class="search">
			<uni-easyinput class="input" trim="all" v-model="linkAddr" placeholder="请输入内容"></uni-easyinput>
			<template v-if="linkAddr">
				<view class="search_button" @click="resolution">解析</view>
			</template>
			<template v-else>
				<view class="search_button" @click="stickup">粘贴</view>
			</template>
		</view>
		
		<view class="image_wrap">
			<template v-if="isSuccess">
				<view class="save_all" @click="saveAll">批量保存到相册</view>
				<view class="image_list" v-for="(item, index) in imageList" :key="index">
					<image class="image_li" mode="aspectFit" :src="item"></image>
					<view class="image_action">
						<view class="copy_link" @click="copyLink($event, item)">复制链接</view>
						<view class="update_img" @click="updateImg($event, item)">下载图片</view>
					</view>
				</view>
			</template>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSuccess: false,
				linkAddr: '', // 连接地址
				imageList: [] // 解析出来的图片列表
			}
		},
		methods: {
			// 粘贴
			stickup() {
				let that = this;
				uni.showLoading({ title: '加载中' });
				uni.getClipboardData({
					success: (res) => {
						let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
						let resData = res.data
						let str = resData.match(reg)
						let ztlj = str[0]
						if (resData && resData !== that.linkAddr) {
							that.linkAddr = resData
							// 调用解析方法
							that.resolution()
						}
					},
					complete: () => {
						uni.hideLoading();
					}
				})
			},
			
			// 解析
			resolution() {
				let that = this
				let inputValue = this.linkAddr
				let url = encodeURIComponent(inputValue)
				if (url !== "") {
					uni.showLoading({
						titl: "解析中",
						mask: true
					})
					uni.request({
						url: "https://proxy.layzz.cn/lyz/getAnalyse?token=rzckszrckc-auther-523ddd&link=" + url,
						timeout: 15e3,
						success: (res) => {
							if (res.data.message == "操作成功") {
								uni.hideLoading()
								if (res.data.data.pics !== null) {
									that.imageList = res.data.data.pics
									!that.isSuccess && (that.isSuccess = true)
								} else if (res.data.data.playAddr !== null) {
									uni.showModal({
										title: '提示',
										content: '检查到该链接为视频,请前往视频去水印页面解析',
										showCancel: false
									})
								} else {
									that.firstResolution()
								}
							} else {
								that.firstResolution()
							}
						},
						fail: () => {
							that.firstResolution()
						}
					})
				} else {
					uni.showToast({
						icon: "none",
						title: "请输入链接",
						duration: 2e3,
						position: "bottom"
					});
				}
			},
			
			// 使用第二种备用解析方法
			firstResolution() {
				let that = this
				let address = this.linkAddr
				let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
				let url = address.match(reg)
				uni.request({
					url: "https://api.srvv.cn/api/video/320EF2279DEED56F34C9721EE90C774F9A8FDECA6641A970C7/48/?url=" + url,
					timeout: 15e3,
					success: (res) => {
						if (res.data.status == '101') {
							uni.hideLoading()
							if (res.data.data.images && res.data.data.images !== null) {
								that.imageList = res.data.data.images
								!that.isSuccess && (that.isSuccess = true)
							} else {
								uni.showModal({
									title: '提示',
									content: '检查到该链接为视频,请前往视频去水印页面解析',
									showCancel: false
								})
							}
						} else {
							that.secondResolution()
						}
					},
					fail: (e) => {
						that.secondResolution()
					}
				})
			},
			
			// 使用第三种备用解析方法
			secondResolution() {
				let that = this
				let address = this.linkAddr
				let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
				let url = address.match(reg)
				uni.request({
					url: "https://api.spapi.cn/get?appkey=43158a31d6b8a1e00613d9220b200c6c&url=" + url,
					success: (res) => {
						if (res.data.msg == '获取成功') {
							uni.hideLoading()
							if (res.data.data.atlas) {
								that.imageList = res.data.data.atlas
								!that.isSuccess && (that.isSuccess = true)
							} else if (res.data.atlas == null) {
								uni.showModal({
									title: '提示',
									content: '检查到该链接为视频,请前往视频去水印页面解析',
									showCancel: false
								})
							} else {
								uni.showModal({
									title: '解析失败：101',
									content: '网络异常，请稍后再试',
									showCancel: false
								})
							}
						} else {
							uni.hideLoading()
							uni.showModal({
								title: '解析失败：102',
								content: '网络异常，请稍后再试',
								showCancel: false
							})
						}
					},
					fail: (e) => {
						uni.hideLoading()
						uni.showModal({
							title: '解析失败：103',
							content: '网络异常，请稍后再试',
							showCancel: false
						})
					}
				})
			},
			
			// 批量保存所有照片
			saveAll() {
				let that = this;
				uni.showLoading({
					title: '图片批量保存中',
					mask: true
				})
				let asyncFunc = function asyncFunc(i) {
					let tempUrl = i;
					if (tempUrl.search("https") == -1) {
						tempUrl = tempUrl.replace('http', 'https')
					}
					return new Promise(function(resolve, reject) {
						uni.downloadFile({
							url: tempUrl,
							timeout: 5e5,
							success: (res) => {
								if (res.statusCode === 200) {
									uni.saveImageToPhotosAlbum({
										filePath: res.tempFilePath,
										success: () => {
											console.log('下载成功')
										},
										fail: (e) => {
											uni.hideLoading()
											if (res.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
												uni.showModal({
													title: '您需要授权相册权限',
													success: (res) => {
														if (res.confirm) {
															uni.openSetting({
																success: () => {},
																fail: (e) => {
																	console.log(e)
																}
															})
														}
													}
												})
											}
										}
									})
									resolve()
								}
							},
							fail: (e) => {
								uni.hideLoading()
								uni.showModal({
									title: '下载出错',
									content: "请点击复制链接去浏览器打开下载，并且请联系客服修复" + res.errMsg,
									showCancel: false,
									success: (res) => {
										if (res.confirm) {
											console.log("用户点击确定");
										} else if (res.cancel) {
											console.log("用户点击取消");
										}
									}
								})
							}
						})
					})
				}
				
				let box5 = function() {
					// let _ref = (0, )
				}
			},
			
			// 点击复制链接按钮
			copyLink(e, src) {
				uni.setClipboardData({
					data: src,
					success() {
						uni.showToast({
							title: "复制成功",
							icon: 'none'
						})
					}
				})
			},
			
			// 点击下载图片按钮
			updateImg(e, src) {
				uni.showLoading({
					title: '保存图片中',
					mask: true
				})
				if (src.search("https") == -1) {
					src = src.replace("http", "https")
				}
				uni.downloadFile({
					url: src,
					timeout: 5e5,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath:res.tempFilePath,
								success: (t) => {
									uni.showToast({
										title: '保存相册成功'
									})
								},
								fail: function fail(res) {
									uni.hideLoading();
									if (res.errMsg == "saveImageToPhotosAlbum:fail auth deny") {
										uni.showModal({
											title: "您需要授权相册权限",
											success: function success(res) {
												if (res.confirm) {
													uni.openSetting({
														success: function success(res) {},
														fail: function fail(res) {
															console.log(res);
														}
													});
												}
											}
										});
									}
								}
							})
						}
					},
					fail: function fail(res) {
						uni.hideLoading();
						uni.showModal({
							title: "下载出错",
							content: "请点击复制链接去浏览器打开下载，并且请联系客服修复" + res.errMsg,
							showCancel: false,
							success: function success(res) {
								if (res.confirm) {
									console.log("用户点击确定");
								} else if (res.cancel) {
									console.log("用户点击取消");
								}
							}
						});
						var db = uniCloud.database();
						var collection = db.collection("fail");
						var res2 = collection.add({
							fail: res.errMsg,
							failurl: a,
							failurltext: this.$data.inputValue
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background-color: #f0f1f1;
	}
	.image-link {
		padding-bottom: 24rpx;
	}
	.search {
		margin: 24rpx;
		display: flex;
		gap: 16rpx;
		.input {
			flex: 1;
		}
		.uni-easyinput {
			background-color: #FFF;
		}
		.search_button {
			width: 160rpx;
			height: 35px;
			color: #FFF;
			font-size: 28rpx;
			border-radius: 8rpx;
			background-color: #7A9BFD;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
	
	.image_wrap {
		height: 100%;
		margin: 24rpx;
		width: auto;
		.save_all {
			height: 88rpx;
			line-height: 88rpx;
			text-align: center;
			font-size: 30rpx;
			background-color: #FFF;
			margin-bottom: 12rpx;
			border: 1px solid #ddd;
			color: rgba(0, 0, 0, 0.85);
		}
		.image_list {
			display: flex;
			flex-direction: column;
			width: 100%;
			background-color: #FFF;
			margin-bottom: 12rpx;
			.image_li {
				margin: 24rpx auto;
			}
			.image_action {
				display: flex;
				gap: 32rpx;
				.copy_link, .update_img {
					flex: 1;
					height: 72rpx;
					text-align: center;
					line-height: 72rpx;
					border: 1px solid #DDD;
					border-radius: 8rpx;
					font-size: 30rpx;
					color: rgba(0, 0, 0, 0.85);
				}
			}
		}
	}
</style>
