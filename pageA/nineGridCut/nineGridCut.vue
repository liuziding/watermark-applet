<template>
	<view class="nine-grid-cut">
		<view class="button-group">
			<button class="select-pic-btn" @tap="chooseImage">选择图片</button>
			<template v-if="isChoose">
				<button class="select-pic-btn" @tap="saveAll">保存所有图片</button>
			</template>
		</view>
		
		<view class="image-group">
			<template v-if="isChoose">
				<image class="image" :src="imgPath" :style="{width:showInfo.width+'px',height:showInfo.height+'px'}" />
				<view class="choose" :style="{width:showInfo.width+'px',height:showInfo.height+'px'}">
					<view
						@tap="previewImage"
						class="choose-module"
						:class="[index%2==0?'choose-module-odd':'']"
						:key="index"
						:style="{width:showInfo.width/3+'px',height:showInfo.height/3+'px',lineHeight:showInfo.height/3+'px'}"
						v-for="(item, index) in series"
					>
						{{index+1}}
					</view>
				</view>
			</template>
		</view>
		<view :style="{height:fixedHeight+'px',width:'100%'}"></view>
		<canvas
			:canvasId="canvasInfo.id"
			class="canvas"
			:style="{width:canvasInfo.width+'px',height:canvasInfo.height+'px',position:absolute,top:(showInfo.height+systemInfo.height)+'px',left:'-99999px'}"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				canvasInfo: {
					id: "mycanvas",
					width: 320,
					height: 568
				},
				showInfo: {
					width: 320,
					height: 568
				},
				systemInfo: {
					width: 320,
					height: 568,
					screenHeight: 0
				},
				fixedHeight: 0,
				imgPath: "",
				isChoose: false,
				series: [0, 1, 2, 3, 4, 5, 6, 7, 8]
			}
		},
		onLoad() {
			let that = this
			uni.getSystemInfo({
				success: (res) => {
					this.systemInfo.width = res.windowWidth
					this.systemInfo.height = res.windowHeight
					this.systemInfo.screenHeight = res.screenHeight
				}
			})
		},
		methods: {
			// 图片转canvas
			imageToCanvas(src) {
				let e = this.canvasInfo, i = uni.createCanvasContext(e.id, this)
				i.drawImage(src, 0, 0, e.width, e.height), i.draw()
			},
			
			// 切图
			cutImage(url) {
				let that = this;
				uni.getImageInfo({
					src: url,
					success: (res) => {
						let s = res.width, a = res.height
						uni.getSystemInfo({
							success: (i) => {
								that.systemInfo.width = i.windowWidth
								that.systemInfo.height = i.windowHeight
								that.systemInfo.screenHeight = i.screenHeight
								that.canvasInfo.width = s
								that.canvasInfo.height = a
								that.showInfo.width = i.windowWidth
								that.showInfo.height = i.windowWidth / s * a
								
								let n = that.systemInfo.height / 2, o = that.showInfo.height + 10
								if (o > n) {
									that.fixedHeight = o - n
									that.imageToCanvas(url)
								}
							}, 
						})
					}
				})
			},
			
			// 选择本地图片
			chooseImage() {
				let that = this
				uni.chooseImage({
					count: 1,
					sizeType: ["compressed"],
					success: res => {
						that.imgPath = res.tempFilePaths[0]
						that.isChoose = true
						that.cutImage(res.tempFilePaths[0])
					}
				})
			},
			
			previewImage: function(t) {
				let e = this.data.canvasInfo, i = t.currentTarget.dataset.index;
				uni.canvasToTempFilePath({
						canvasId: e.id,
						x: i % 3 * e.width / 3,
						y: parseInt(i / 3) * e.height / 3,
						width: e.width / 3,
						height: e.height / 3,
						success: function(t) {
								console.log("成功路径： " + t.tempFilePath);
								var e = [];
								e.push(t.tempFilePath), uni.previewImage({
										urls: e
								});
						}
				}, this);
		},
			
			// 保存所有图片
			saveAll() {
				
				uni.showLoading({ title: "正在保存" })
				for (let i = 0; i < 9; i++) {
					this.saveImageToPath(i)
				}
			},
			
			saveImageToPath(i) {
				let c = this.canvasInfo
				uni.canvasToTempFilePath({
					canvasId: c.id,
					x: i % 3 * c.width / 3,
					y: parseInt(i / 3) * c.height / 3,
					width: c.width / 3,
					height: c.height / 3,
					success: (res) => {
						uni.saveImageToPhotosAlbum({
							filePath: res.tempFilePath,
							success: (s) => {
								uni.hideLoading({
									complete: (t) => {
										uni.showToast({ title: '保存成功' })
									}
								})
							},
							fail: (f) => {
								uni.hideLoading({
									complete: (t) => {}
								}), uni.showToast({
									title: '保存失败',
									icon: 'none'
								})
							}
						})
					},
					complete(e) {
						console.log(e)
						uni.hideLoading()
					}
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.button-group {
		margin: 32rpx 32rpx 0;
		// padding: 30rpx;
		// display: flex;
		// flex-direction: column;
		.select-pic-btn {
			margin-bottom: 24rpx;
			background-color: #0281FF;
			color: #FFF;
			
			// margin-bottom:15rpx;
			// background-color: #0081ff;
		}
	}
	
	.image-group {
		height: 50vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;

		.image {
			z-index: 99;
		}
		.choose, .image {
			display: block;
			box-sizing: border-box;
			overflow: hidden;
			position: absolute;
			top: 16rpx;
			left: 0;
		}
		.choose {
			z-index: 100;
		}
		.choose-module {
		    box-sizing: border-box;
		    overflow: hidden;
		    float: left;
		    background-color: rgba(0,0,0,.5);
		    border: 1rpx dashed #fff;
		    text-align: center;
		    color: #fff;
		    font-size: 40rpx;
		}
		.choose-module-oddc {
		  background-color: rgba(251,114,160,.8);
		}
		.canvas {
			z-index: 1;
			display: block;
			overflow: hidden;
			opacity: 0;
			box-sizing: border-box;
		}
	}
</style>
