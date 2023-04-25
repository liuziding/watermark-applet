<template>
  <view class="ancientry">
		<view class="ancientry_original">
			<template v-if="originalImage">
				<image class="ancientry_original_image" @load="onImageLoad" :src="originalImage" mode="aspectFit" />
				<movable-area ref="movableArea" id="movableArea" :style="{position: 'absolute', left:canvasLeft+'px', top:canvasTop+'px', width: canvasWidth+'px', height: canvasHeight+'px'}">
					<movable-view
						:x="x"
						:y="y"
						:scale="true"
						scale-min="1"
						scale-max="4"
						direction="all"
						ref="movableView"
						class="movableView"
						out-of-bounds="false"
					></movable-view>
				</movable-area>
			</template>
			<template v-else>
				<view class="angle left-top-angle"></view>
				<view class="angle left-bottom-angle"></view>
				<view class="angle right-top-angle"></view>
				<view class="angle right-bottom-angle"></view>
			</template>
		</view>
		<view class="ancientry_original_operation">
			<view class="ancientry_original_button" @click="uploadImage">上传图片</view>
			<view class="ancientry_original_button" @click="removeWaterMark">去除水印</view>
		</view>
		<view class="ancientry_generated">
			<!-- <image :src="generatedImage" mode="aspectFit" /> -->
			<image :src="'data:image/png;base64,'+generatedImage" mode="aspectFit" />
		</view>
		<view class="ancientry_generated_operation">
			<view class="ancientry_generated_button" @click="getSaveImg">保存图片</view>
		</view>
	</view>
</template>

<style lang="scss" scoped>
	.ancientry {
		width: 100vw;
		height: 100vh;
		background-color: #FFF;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.ancientry_original, .ancientry_generated {
			flex: 1;
			width: 100%;
			margin: 0 auto;
			// border-bottom: 1px solid #ddd;
			// border-top: 1px solid #DDD;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.ancientry_original {
			// border: 1px solid green;
			position: relative;
			.angle {
				border-right: 4rpx solid #DDD;
				border-top: 4rpx solid #DDD;
				width: 60rpx;
				height: 60rpx;
			}
			.left-top-angle {
				position: absolute;
				left: 32rpx;
				top: 32rpx;
				transform: rotate(270deg);
			}
			.left-bottom-angle {
				position: absolute;
				left: 32rpx;
				bottom: 32rpx;
				transform: rotate(180deg);
			}
			.right-top-angle {
				position: absolute;
				right: 32rpx;
				top: 32rpx;
			}
			.right-bottom-angle {
				position: absolute;
				right: 32rpx;
				bottom: 32rpx;
				transform: rotate(90deg);
			}
			movable-area {
				height: 200px;
				width: 200px;
				overflow: hidden;
				box-sizing: border-box;
				border: 1px solid #999;
				movable-view {
					  display: flex;
					  align-items: center;
					  justify-content: center;
					  height: 40px;
					  width: 80px;
					  // background: #1AAD19;
						border: 1px solid red;
					  color: #fff;
					}
			}
		}
		.ancientry_original_operation {
			height: 100rpx;
			width: 100%;
			display: flex;
			margin-top: 12rpx;
			.ancientry_original_button {
				flex: 1;
				flex-direction: row;
				height: 64rpx;
				text-align: center;
				line-height: 64rpx;
				font-size: 26rpx;
				border: 1px solid #DDD;
				border-radius: 24rpx;
				&:nth-child(1) {
					margin-left: 32rpx;
					margin-right: 16rpx;
				}
				&:nth-child(2) {
					margin-right: 32rpx;
				}
			}
		}
		.ancientry_generated_operation {
			height: 88rpx;
			width: 100%;
			margin-top: 12rpx;
			.ancientry_generated_button {
				height: 64rpx;
				text-align: center;
				line-height: 64rpx;
				font-size: 26rpx;
				border: 1px solid #DDD;
				border-radius: 24rpx;
				margin: 0 32rpx;
			}
		}
	}
		
</style>

<script>
	let timeout = null;
	import base64src from '@/utils/base64.js';
	export default {
		data() {
			return {
				x: 10, // 矩形框x坐标
				y: 10, // 矩形框y坐标
				imgWidth: 0, 								// 原始图片宽度
				imgHeight: 0, 							// 原始图片高度
				canvasLeft: 0, 						// 画布距离左边大小
				canvasTop: 0, 							// 画布距离顶部大小
				canvasWidth: 0, // 画布宽度
				canvasHeight: 0, // 画布高度
				originalWidth: 0, 					// 原始盒子宽度
				originalHeight: 0,					// 原始盒子高度
				originalImage: "", // 原始图片地址
				generatedImage: "", // 去水印后的图片
				qrcode: "",
				imgScale: 1,
			}
		},
		
		mounted() {
			// this.setPosition();
		},
		
		onLoad() {
			this.handleGetAccessToken();
		},
		
		onReady() {
			// 获取上方边框的宽高
			let that = this;
			uni.createSelectorQuery()
					.select(".ancientry_original")
					.fields({ node: true, size: true })
					.exec(async (res) => {
						that.originalWidth = res[0].width;
						that.originalHeight = res[0].height;
					});
		},
			
		methods: {
			
			// 图片加载的时候触发
			onImageLoad() {
				let that = this;
				uni.createSelectorQuery()
						.select(".ancientry_original_image")
						.fields({ node: true, size: true })
						.exec(async (res) => {
							// that.imgWidth = res[0].width; // 原始图片宽度
							// that.imgHeight = res[0].height; // 原始图片高度
						});
			},
			
			// 上传图片
			uploadImage() {
				let that = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album', 'camera'], // 从相册选择
					success(res) {
						that.originalImage = res.tempFilePaths[0];
						that.generatedImage = "";
						that.qrcode = "";

						setTimeout(function() {
							// 获取图片宽高
							uni.getImageInfo({
								src: res.tempFilePaths[0],
								success: info => {
									let ratio_w = that.originalWidth / info.width;
									let ratio_h = that.originalHeight / info.height;
									
									if (ratio_w > ratio_h) {
										let distance = (that.originalWidth - (that.originalHeight * info.width) / info.height) / 2;
										that.canvasTop = 0;
										that.imgScale = ratio_h;
										that.canvasLeft = distance;
										that.canvasHeight = that.originalHeight;
										that.canvasWidth = (that.originalHeight / info.height) * info.width;
									} else {
										let distance = (that.originalHeight - (that.originalWidth / info.width) * info.height) / 2;
										that.canvasLeft = 0;
										that.imgScale = ratio_w;
										that.canvasTop = distance;
										that.canvasWidth = that.originalWidth;
										that.canvasHeight = (that.originalWidth / info.width) * info.height;
									}
								},
								fail(e) {
									console.log(e);
								}
							})
						}, 100);
					}
				});
			},
			
			// 获取授权判断是否授权相册
			getSaveImg(){
				debugger;
				let that = this;
				if (that.generatedImage) {
					uni.getSetting({
						success: (res)=>{
							if (!res.authSetting["scope.writePhotosAlbum"]){
								uni.showModal({
									title: '警告',
									content: '检测到您没您未授权相册权限,点击确定获取授权。',
									success: function (res) {
										if (res.confirm) {
											uni.authorize({
												scope: 'scope.writePhotosAlbum',
												success() {
													// 用户已经同意
													that.saveImgToAlbum();
												},
												fail(err){
													console.log('用户拒绝授权相册') 
												}
											})		 
										}
									}
								})
							} else {
								that.saveImgToAlbum();
							}
						 },
						 fail: () => {
							console.log('点击了拒绝');
						 }
					})
				} else {
					uni.showToast({
						title: '您还没有上传图片！',
						icon: 'none'
					})
				}
			},
			
			// 保存二维码图片到相册
			saveImgToAlbum() {
				var fileManager = uni.getFileSystemManager();
				fileManager.writeFile({
					filePath: wx.env.USER_DATA_PATH+'/img.jpg', // 指定图片的临时路径
					data: this.generatedImage, // 要写入的文本或二进制数据
					encoding: 'base64', // 指定写入文件的字符编码
					success: res => {
						console.log('写入文件成功', res)
						console.log(wx.env.USER_DATA_PATH + '/img.jpg')
						uni.saveImageToPhotosAlbum({ // 保存图片到相册
							filePath: wx.env.USER_DATA_PATH + '/img.jpg',
							success: function (res) {
								console.log('保存成功', res)
								uni.showToast({
									title: '保存成功',
								})
							},
							fail: function (err) {
								console.log('保存失败', err)
							}
						})
					},
					file: err => {
						console.log('写入文件失败', err)
					}
				})
			},
			
			//把base64转换成图片
			getBase64ImageUrl(base64Url) {
				// 获取到base64Data
				let base64Data = base64Url;
				// 通过微信小程序自带方法将base64转为二进制去除特殊符号，再转回base64
				base64Data = uni.arrayBufferToBase64(uni.base64ToArrayBuffer(base64Data));
				// 拼接请求头，data格式可以为image/png或者image/jpeg等，看需求
				// const base64ImgUrl = "data:image/png;base64," + base64Data;
				this.generatedImage = base64Data;
				
				// console.log('==========');
				// console.log(base64Url);
				// let that = this;
				// that.qrcode = base64Url;
				// //拿到后端给的base64字符串
				// this.generatedImage = base64Url;// "data:image/jpg;base64," + base64Url;
				// // var shareQrImg = `data:image/jpg;base64,` + base64Url;
				// // base64src(shareQrImg, resCurrent => {
				// // 	console.log('1111111');
				// // 	console.log(resCurrent);
				// // 		that.generatedImage = resCurrent;
				// // });
			},
			
			// 移动矩形框触发的方法
			movableChange(e) {
				this.x = e.detail.x; // 矩形框x坐标
				this.y = e.detail.y; // 矩形框y坐标
			},
			
			// 矩形框缩放触发的方法
			movableScale(e) {
				this.x = e.detail.x; // 矩形框x坐标
				this.y = e.detail.y; // 矩形框y坐标
			},
			
			// 去水印
			removeWaterMark() {
				let that = this;
				if (that.originalImage) {
					let FSM = wx.getFileSystemManager();
					FSM.readFile({
						filePath: that.originalImage,
						encoding: "base64",
						success: (res) => {
							that.handleRemoveWaterMark(res.data);
						},
						fail: res => {
							console.log("转换base失败");
						}
					})
				} else {
					uni.showToast({
						title: '您还没有上传图片！',
						icon: 'none'
					})
				}
			},
			
			// ---------------------调用网络接口-----------------------
			// 生成去水印的图片
			handleRemoveWaterMark(imageBase64) {
				let that = this;
				let access_token = uni.getStorageSync("access_token");
				debugger;
				console.log(this.$refs.movableArea);
				// let info = uni.createSelectorQuery().in("#movableArea").select(".movableView");
				uni.createSelectorQuery().in(this.$parent).select(".movableView").boundingClientRect(el => {
					console.log(el);
					debugger;
				// info.boundingClientRect(function(el) {
					const width = el.width;
					const height = el.height;
					uni.showLoading({ title: '加载中' });
					wx.request({
						url: "https://aip.baidubce.com/rest/2.0/image-process/v1/inpainting?access_token="+access_token,
						data: JSON.stringify({
							// rectangle: [{width: 460, top: 744, height: 58, left: 0}],
							rectangle: [{width: Math.floor(width / that.imgScale), top: Math.floor(that.y / that.imgScale), height: Math.floor(height / that.imgScale), left: Math.floor(that.x / that.imgScale)}],
							
							image: imageBase64
						}),
						header: { 'Content-Type': 'application/x-www-form-urlencoded' },
						method: 'POST',
						success(res) {
							uni.showToast({
								title: '成功',
								icon: 'success',
							});
							that.getBase64ImageUrl(res.data.image);
						},
						fail(e) {
							uni.hideLoading();
							uni.showToast({
								title: '请求失败',
								icon: 'none'
							});
						}
					})
				}).exec();
				// uni.createSelectorQuery()
				// 		.select(".movableView")
				// 		.fields({ node: true, size: true })
				// 		.exec(async (res) => {
				// 			const width = res[0].width;
				// 			const height = res[0].height;
				// 			uni.showLoading({ title: '加载中' });
				// 			wx.request({
				// 				url: "https://aip.baidubce.com/rest/2.0/image-process/v1/inpainting?access_token="+access_token,
				// 				data: JSON.stringify({
				// 					// rectangle: [{width: 460, top: 744, height: 58, left: 0}],
				// 					rectangle: [{width: Math.floor(width / that.imgScale), top: Math.floor(that.y / that.imgScale), height: Math.floor(height / that.imgScale), left: Math.floor(that.x / that.imgScale)}],
									
				// 					image: imageBase64
				// 				}),
				// 				header: { 'Content-Type': 'application/x-www-form-urlencoded' },
				// 				method: 'POST',
				// 				success(res) {
				// 					uni.showToast({
				// 						title: '成功',
				// 						icon: 'success',
				// 					});
				// 					that.getBase64ImageUrl(res.data.image);
				// 				},
				// 				fail(e) {
				// 					uni.hideLoading();
				// 					uni.showToast({
				// 						title: '请求失败',
				// 						icon: 'none'
				// 					});
				// 				}
				// 			})
				// 		});
				
			},
			
			// 调用百度图像增强与特效接口，获取access_token
			handleGetAccessToken() {
				uni.request({
					url: "https://aip.baidubce.com/oauth/2.0/token",
					data: {
						grant_type: "client_credentials",
						client_id: "c5V1SCzAG45uItEaLmItKT3L",
						client_secret: "MMYwGmRaRG4P6j7wkz0j89y2aTKjtec0"
					},
					success: (res) => {
						console.log(res);
						console.log(res.data.access_token);
						const { access_token } = res.data;
						if (access_token) {
							uni.setStorageSync("access_token", access_token);
							// uni.setStorage({
							// 	key: "access_token",
							// 	data: access_token
							// });
						} else {
							uni.setStorageSync("access_token", null);
							// uni.setStorage({
							// 	key: "access_token",
							// 	data: null
							// });
						}
					},
					fail() {
						console.log("获取access_token失败！");
					}
				});
			},
		}
	}
</script>
