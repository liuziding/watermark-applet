<template>
	<view>
		<view class="content">
			<uni-swiper-dot class="uni-swiper-dot-box" @clickItem=clickItem :info="info" :current="current" mode="dot"
				field="content">
				<swiper class="swiper-box" @change="change" :current="swiperDotIndex">
					<swiper-item v-for="(item, index) in info" :key="index">
						<view class="swiper-item">
							<!-- <view class="image" :style="{backgroundColor: item.backgroundColor}"></view> -->
							<image :src="item.url" />
						</view>
					</swiper-item>
				</swiper>
			</uni-swiper-dot>
		</view>
		<view class="water-list">
			<view class="water-item" @click="videoLineWater">
				<view class="water-item-text">
					<text class="text-1">视频去水印</text>
					<text class="text-2">链接提取视频</text>
				</view>
				<image src="../../static/images/common/water-1.png"></image>
			</view>
			<view class="water-item" @click="imageLineWater">
				<view class="water-item-text">
					<text class="text-1">图片去水印</text>
					<text class="text-2">链接提取图片</text>
				</view>
				<image src="../../static/images/common/water-2.png"></image>
				
			</view>
		</view>
		<view class="water-function">
			<view class="function-list">
				<view class="function-item" @tap="imageLocalWater">
					<i class="iconfont icon-tupian" />
					<text>相册图片去水印</text>
				</view>
				<view class="function-item" @tap="nineGridCut">
					<i class="iconfont icon-jiugongge" />
					<text>九宫格切图</text>
				</view>
				<view class="function-item">
					<i class="iconfont icon-screen" />
					<text>图片拼接</text>
				</view>
				<view class="function-item">
					<i class="iconfont icon-xiugai" />
					<text>视频MD5修改</text>
				</view>
			</view>
		</view>
		<view class="share">
			<button getuserinfo="getUserInfo" open-type="share" plain="true">分享给朋友</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: [{
					url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
					content: '内容 A',
					backgroundColor: '#E11A1A'
				}, {
					url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
					content: '内容 B',
					backgroundColor: '#1AE131'
				}, {
					url: 'https://web-assets.dcloud.net.cn/unidoc/zh/shuijiao.jpg',
					content: '内容 C',
					backgroundColor: '#341AE1'
				}],
				current: 0,
				swiperDotIndex: 0
			}
		},
		methods: {
			// 切换滑块图片
			change(e) {
				this.current = e.detail.current
			},
			
			clickItem(e) {
				this.swiperDotIndex = e
			},
			
			// 跳转视频链接去水印页面
			videoLineWater() {
				uni.navigateTo({
					url: "/pageA/videoLine/videoLine",
					fail: (res) => {
						uni.showToast({
							icon: "none",
							title: res.errMsg
						})
					}
				})
			},
			
			// 跳转图片链接去水印页面
			imageLineWater() {
				uni.navigateTo({
					url: "/pageA/imageLine/imageLine",
					fail: (res) => {
						uni.showToast({
							icon: "none",
							title: res.errMsg
						})
					}
				})
			},
			
			// 跳转九宫格切图页面
			nineGridCut() {
				uni.navigateTo({
					url: "/pageA/nineGridCut/nineGridCut",
					fail: (res) => {
						uni.showToast({
							icon: "none",
							title: res.errMsg
						})
					}
				})
			},
			
			// 跳转相册图片去水印页面
			imageLocalWater() {
				uni.navigateTo({
					url: "/pageA/imageLocal/imageLocal",
					fail: (res) => {
						uni.showToast({
							icon: "none",
							title: res.errMsg
						})
					}
				})
			}
		},
		
		// 分享
		onShareAppMessage(res) {
			return {
				title: "简辰去水印",
				path: "/pages/home/home",
				imageUrl: "../../static/images/common/share.png",
				success(res) {
					console.log("分享成功!")
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		margin: 0 24rpx;
	}
	.swiper-box {
			height: 300rpx;
		}
	
		.swiper-item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			min-height: 300rpx;
			color: #fff;
			image {
				width: 100%;
				height: 300rpx;
			}
		}

		.active {
			border-style: solid;
			border-color: #007aff;
			border-width: 1px;
		}
	
	.water-list {
		margin: 16rpx 24rpx 0;
		display: flex;
		gap: 16rpx;
		.water-item {
			flex: 1;
			height: 180rpx;
			background-color: #FFF;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.water-item-text {
				margin-left: 16rpx;
				display: flex;
				flex-direction: column;
				.text-1 {
					font-size: 30rpx;
					font-weight: 700;
					line-height: 2;
				}
				.text-2 {
					font-size: 25rpx;
					font-weight: lighter;
					line-height: 1.5;
				}
			}
			image {
				height: 170rpx;
				width: 170rpx;
			}
		}
	}
	
	.water-function {
		background-color: #FFF;
		margin: 24rpx;
		.function-list {
			display: flex;
			flex-wrap: wrap;
			.function-item {
				flex: 1;
				flex-basis: calc(33.33%-5px);
				height: 180rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				flex-direction: column;
				text {
					font-size: 24rpx;
					line-height: 2;
					font-weight: 600;
				}
				.iconfont {
					color: #7A9BFD;
				}
				.icon-tupian {
					font-size: 88rpx;
				}
				.icon-jiugongge {
					font-size: 88rpx;
				}
				.icon-screen {
					font-size: 82rpx;
				}
				.icon-xiugai {
					font-size: 86rpx;
				}
			}
		}
	}
	
	.share {
		button {
			margin: 10rpx 24rpx;
			background-color: #7A9BFD;
			color: #FFF;
			border: 0;
		}
	}
</style>
