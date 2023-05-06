<template>
	<view class="video-link">
		<view class="search">
			<uni-easyinput class="input" trim="all" v-model="linkAddr" placeholder="请输入链接"></uni-easyinput>
			<template v-if="linkAddr">
				<view class="search-button" @click="resolution">解析</view>
			</template>
			<template v-else>
				<view class="search-button" @click="stickup">粘贴</view>
			</template>
		</view>
		
		<view class="video-wrap" v-if="isSuccess">
			<view class="video-title">
				<text>{{'标题：'+videoTitle}}</text>
			</view>
			<view class="video-content" v-if="videoAddr">
				<video objectFit="contain" play-btn-position="center" :poster="imageAddr" :src="videoAddr"></video>
			</view>
			<view class="button-group">
				<view class="list">
					<image src="../../static/images/common/service.png"></image>
					<text>联系客服</text>
				</view>
				<view class="list" @click="saveCover">
					<image src="../../static/images/common/cover.png"></image>
					<text>保存封面</text>
				</view>
				<view class="list" @click="copyLink">
					<image src="../../static/images/common/link.png"></image>
					<text>复制链接</text>
				</view>
				<view class="list" @click="saveVideo">
					<image src="../../static/images/common/video.png"></image>
					<text>保存视频</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				videoTitle: '', // 视频标题
				linkAddr: '',   // 链接地址
				videoAddr: '',  // 视频地址
				imageAddr: '',  // 图片地址
				isSuccess: false, // 是否解析成功
			};
		},
		methods: {
			// 粘贴
			stickup() {
				let that = this;
				// uni.showLoading({ title: '加载中' });
				uni.getClipboardData({
					success: (res) => {
						let reg = /(https?|http|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/g
						let resData = res.data
						let str = resData.match(reg)
						let ztlj = str[0]
						if (ztlj && ztlj !== that.linkAddr) {
							that.linkAddr = resData
							// 调用解析方法
							that.resolution()
						}
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
								if (res.data.data.playAddr !== null && res.data.data.playAddr !== "") {
									that.videoAddr = res.data.data.playAddr
									that.imageAddr = res.data.data.cover
									that.videoTitle = res.data.data.desc
									that.isSuccess = true
									uni.hideLoading()
								} else if (res.data.data.pics !== null) {
									uni.hideLoading()
									uni.showLoading({
										title: "提示",
										content: "检查到该链接为图片,请前往图集去水印页面解析",
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
							if (res.data.data.video && res.data.data.video !== null) {
								that.videoAddr = res.data.data.video;
								that.imageAddr = res.data.data.image;
								that.videoTitle = res.data.data.title;
								!that.isSuccess && (that.isSuccess = true)
							} else {
								uni.showModal({
									title: "提示",
									content: "检查到该链接为图片,请前往图集去水印页面解析",
									showCancel: false
								});
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
					url: 'https://api.spapi.cn/get?appkey=43158a31d6b8a1e00613d9220b200c6c&url=' + url,
          timeout: 15e3,
					success: (res) => {
						if (res.data.msg == '获取成功') {
							uni.hideLoading()
							if (res.data.data.video) {
								that.videoAddr = res.data.data.video;
								that.imageAddr = res.data.data.image;
								that.videoTitle = res.data.data.title;
								!that.isSuccess && (that.isSuccess = true)
							} else if (res.data.data.atlas) {
								uni.showModal({
									title: "提示",
									content: "检查到该链接为图片,请前往图集去水印页面解析",
									showCancel: false
								})
							} else {
								uni.showModal({
									title: "解析失败：101",
									content: "请赶快联系客服修复",
									showCancel: false
								});
							}
						} else {
							uni.hideLoading();
							uni.showModal({
								title: "解析失败：102",
								content: "请赶快联系客服修复",
								showCancel: false
							})
						}
					},
					fail: (e) => {
						uni.hideLoading();
						uni.showModal({
							title: "网络错误：103",
							content: "排除网络问题-请联系客服解决",
							showCancel: false
						});
					}
				})
			},
		
			// 点击保存视频按钮
			saveVideo() {
				let that = this
				let manage = uni.getFileSystemManager()
				let basePath = ''.concat('http://usr')
				manage.readdir({
					dirPath: basePath,
					// 获取文件列表
					success: (res) => {
						res.files.forEach((val) => {
							// 遍历文件列表里的数据
							manage.unlink({
								filePath: basePath + '/' + val
							})
						})
					},
					fail: (err) => {},
					complete: () => {}
				})
				let fileName = '简辰去水印-' + new Date().valueOf()
				// 拼接名称
				let filePath = 'http://usr' + '/' + fileName + '.mp4'
				let tempUrl = that.videoAddr
				if (tempUrl.search('https') == -1) {
					tempUrl = tempUrl.replace("http", "https")
				}

				let downloadTask = uni.downloadFile({
					// 配置下载
					url: tempUrl,
					filePath: filePath,
					timeout: 5e5,
					success: (res) => {
						if (res.statusCode === 200) {
							uni.saveVideoToPhotosAlbum({
								filePath: filePath,
								success: (resp) => {
									uni.hideLoading()
									uni.showToast({
										title: '保存成功',
										icon: 'none'
									})
								},
								fail: (err) => {
									uni.hideLoading()
									if (res.errMsg == 'saveVideoToPhotosAlbum:fail auth deny') {
										uni.showModal({
											title: '您需要授权相册权限',
											success: (resp) => {
												if (resq.confirm) {
													uni.openSetting({
														success: () => {},
														fail: () => {}
													})
												}
											}
										})
									}
								}
							})
						}
					}
				})
				
				downloadTask.onProgressUpdate((res) => {
					console.log("下载进度" + res.progress);
					console.log("已经下载的数据长度" + res.totalBytesWritten);
					console.log("预期需要下载的数据总长度" + res.totalBytesExpectedToWrite);
				})
			},
			
			// 点击复制链接按钮
			copyLink() {
				uni.setClipboardData({
					data: this.videoAddr,
					success: function success() {
						uni.showToast({
							icon: "none",
							title: "复制成功"
						});
					}
				})
			},
			
			// 保存封面
			saveCover() {
				uni.showLoading({
					title: "保存封面中",
					mask: false
				})
				uni.downloadFile({
					url: this.imageAddr,
					success: function success(res) {
						if (res.statusCode === 200) {
							uni.saveImageToPhotosAlbum({
								filePath: res.tempFilePath,
								success: () => {
									uni.showToast({ title: "保存相册成功" })
								}
							})
						}
					},
					fail: function fail(res) {
						uni.showToast({ title: "无封面" })
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.search {
		margin: 24rpx;
		display: flex;
		gap: 16rpx;
		.input {
			flex: 1;
		}
		.search-button {
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
	
	.video-wrap {
		margin: 24rpx;
		background-color: #FFF;
		
		.video-title {
			align-items: center;
			display: flex;
			flex-direction: column;
			height: 80rpx;
			line-height: 80rpx;
			justify-content: center;
			text {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				width: 90%;
				font-size: 30rpx;
				color: rgba(0, 0, 0, 0.85);
			}
		}
		.video-content {
			video {
				height: 400rpx;
				width: 100%;
			}
		}
		.button-group {
			height: 160rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.list {
				flex: 1;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
				image {
					height: 88rpx;
					width: 88rpx;
					margin-top: 8rpx;
				}
				text {
					line-height: 2;
					font-size: 28rpx;
					color: rgba(0, 0, 0, 0.85);
				}
			}
		}
	}
</style>
