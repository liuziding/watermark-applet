<template>
	<view>
		<view class="header">
			<view class="header-l">
				<image class="header-l-logo" src="../../static/images/common/logo.png" />
			</view>
			<view class="header-r">
				<text>版本号：1.0.0</text>
				<text>上海简辰信科去水印工具</text>
			</view>
		</view>
		
		<view class="list-content">
			<view class="li" @click="aboutWe">
				<view class="text-icon">
					<i class="iconfont icon-guanyuwomen" />
				</view>
				<view class="text">关于</view>
				<i class="iconfont icon-youjiantou" />
			</view>
			<view class="li" @click="privacyPolicy">
				<view class="text-icon">
					<i class="iconfont icon-yinsizhengce li-icon" />
				</view>
				<view class="text">隐私政策</view>
				<i class="iconfont icon-youjiantou" />
			</view>
			<view class="li">
				<view class="text-icon">
					<i class="iconfont icon-fenxiang li-icon"></i>
				</view>
				<view class="text">分享小程序</view>
				<i class="iconfont icon-youjiantou"></i>
			</view>
		</view>
		
		<view class="online-service">
			<button class="service-button" open-type="contact">在线客服</button>
		</view>
	</view>
</template>

<script>
export default {
	methods: {
		
		// 点击关于我们弹出对话框
		aboutWe() {
			uni.showModal({
				content: "专业开发去水印，实力雄厚，值得拥有",
				showCancel: false,
				confirmText: "确认",
				success: function success(res) {
					if (res.confirm) {}
				}
			})
		},
		
		// 点击隐私政策，跳转对应页面
		privacyPolicy() {
			uni.navigateTo({
				url: "/pageA/privacyPolicy/privacyPolicy",
				fail: function fail() {
					uni.showToast({
							icon: "none",
							title: res.errMsg
					})
				}
			})
		}
	}
};
</script>

<style lang="scss" scoped>
	page {
		background-color: #F1F1F1;
		font-size: 28rpx;
	}
	.header {
		background-color: #FFF;
		height: 180rpx;
		margin-bottom: 20rpx;
		display: flex;
		flex-direction: row;
		.header-l {
			align-items: center;
			height: 100%;
			display: flex;
			flex-direction: row;
			justify-content: center;
			.header-l-logo {
				border: 1px solid #F1F1F1;
				padding: 20rpx;
				height: 57rpx;
				width: 129rpx;
				margin: 20rpx 20rpx 20rpx 32rpx;
			}
		}
		.header-r {
			display: flex;
			flex-direction: column;
			height: 100%;
			justify-content: center;
			text {
				line-height: 1.5;
				font-size: 32rpx;
			}
		}
	}
	
	.list-content {
		background: #FFF;
		.li {
			border-bottom: 1px solid #F1F1F1;
			display: flex;
			height: 88rpx;
			align-items: center;
			.text-icon {
				width: 80rpx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				margin: 0 12rpx;
				.iconfont {
					color: #7A9BFD;
				}
				.icon-guanyuwomen {
					font-size: 48rpx;
				}
				.icon-yinsizhengce {
					font-size: 52rpx;
				}
				.icon-fenxiang {
					font-size: 36rpx;
				}
			}
			
			.text {
				flex: 1;
				color: rgba(0, 0, 0, 0.75);
			}
			.icon-youjiantou {
				color: rgba(0, 0, 0, 0.25);
				font-size: 42rpx;
				margin-right: 32rpx;
			}
			&:last-child {
				border: none;
			}
		}
	}
	
	.online-service {
		margin-top: 64rpx;
		width: 100%;
		.service-button {
			height: 88rpx;
			line-height: 88rpx;
			background: #FFF;
			text-align: center;
			margin: 0 32rpx;
		}
	}
</style>
