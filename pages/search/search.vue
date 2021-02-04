<template>
	<view class="content">
		<view class="top-bar">
			<view class="search">
				<image src="../../static/images/search/search.png"></image>
				<input type="search" placeholder="搜索用户/群" placeholder-style="color:#aaa;font-weight:400;" @inpput="search"/>
			</view>
			<view class="top-bar-right">
				<view class="text">取消</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title">用户</view>
				<view class="list user">
					<image src="../../static/images/img/four.png"></image>
					<view class="message">
						<view class="name">小白</view>
						<view class="email">baizuige@gmail.com</view>
					</view>
					<button type="default">发送</button>
				</view>
				<view class="list user">
					<image src="../../static/images/img/three.png"></image>
					<view class="message">
						<view class="name">小白</view>
						<view class="email">baizuige@gmail.com</view>
					</view>
					<button type="default">发送</button>
				</view>
				<view class="list user">
					<image src="../../static/images/img/two.png"></image>
					<view class="message">
						<view class="name">小白</view>
						<view class="email">baizuige@gmail.com</view>
					</view>
					<button type="default">发送</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
	// @import "../../commons/css/mycss.scss";
	.top-bar{
		height: 88rpx;
		padding: 0 $uni-spacing-col-base;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background: $uni-bg-color;
		box-shadow: 0 1px 0 0 $uni-border-color;
		.search{
			flex: 0.9;
			background-color: $uni-bg-color-grey;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-left: 12rpx;
			input{
				order: 1;
				height: 72rpx;
				flex: 1;
				// padding: 0 60rpx 0 12rpx;
			}
			image{
				order: 2;
				padding: 16rpx 16rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	.main{
		margin-top: 120rpx;
		.title{
			font-size: 44rpx;
			font-weight: 600;
		}
		image{
			
		}
	}
</style>
