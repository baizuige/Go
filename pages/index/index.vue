<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/img/four.png" class="admin"></image>
			</view>
			<view class="top-bar-center">
				<image src="../../static/images/index/logo.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="search" @tap="toSearch"><image src="../../static/images/index/search.png"></image></view>
				<view class="add"><image src="../../static/images/index/add.png"></image></view>
			</view>
		</view>
		<view class="main">
			<!-- <view class="apply"> -->
				<view class="friend-item">
					<view class="friend-item-l">
						<text class="tip">1</text>
						<image src="../../static/images/index/apply.png" mode=""></image>
					</view>
					<view class="friend-item-r">
						<view class="top">
							<view class="name">好友申请</view>
							<view class="time">17:14</view>
						</view>
						<view class="message">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</view>
					</view>
				</view>
			<!-- </view> -->
			<!-- <view class="friends"> -->
				<view class="friend-item" v-for="item in friends" >
					<view class="friend-item-l">
						<view class="tip" v-if="parseInt(item.tip)>0">{{item.tip}}</view>
						<image :src="item.imgurl" mode=""></image>
					</view>
					<view class="friend-item-r">
						<view class="top">
							<view class="name">{{item.name}}</view>
							<view class="time">{{changeTime(item.time)}}</view>
						</view>
						<view class="message">{{item.message}}</view>
					</view>
				</view>
				
			<!-- </view> -->
		</view>
		
		<view class="test">
		</view>
	</view>
</template>

<script>
	import datas from '../../commons/js/datas.js'
	import myfunc from '../../commons/js/myfunc.js'
	export default {
		data() {
			return {
				friends:[],
			}
		},
		onLoad() {
			this.getFriends();
		},
		methods: {
			toSearch: function(){
				uni.navigateTo({
					url:"../search/search"
				});
			},
			changeTime: function(date){
				return myfunc.dateTime(date);
			},
			getFriends: function(){
				this.friends=datas.friends();
				this.friends.sort((a,b)=>Date.parse(b.time)-Date.parse(a.time));
				this.friends.map(v=>{
					v.imgurl = '../../static/images/img/'+v.imgurl;
					if(+v.tip>99){
						v.tip = '99+';
					}
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	*{
		margin: 0;
		padding: 0;
	}
	.top-bar{
		position: fixed;
		top: 0;
		left: 0;
		background: $uni-bg-color;
		box-shadow: 0 1px 0 0 $uni-border-color;
	}
	.main{
		box-sizing: border-box;
		padding-top: 88rpx;
	}
	.friend-item{
		height: 96rpx;
		padding:16rpx $uni-spacing-col-base;
		&:active{
			background-color: $uni-bg-color-grey;
		}
		.friend-item-l{
			position: relative;
			float: left;
			image{
				width: 96rpx;
				height: 96rpx;
				border-radius: $uni-border-radius-base;
				background-color: $uni-color-primary;
			}
			.tip{
				position: absolute;
				z-index: 10;
				top: 8rpx;
				right: 8rpx;
				letter-spacing: 1rpx;
				transform: translateX(50%) translateY(-50%);
				min-width: 36rpx;
				padding: 0 8rpx;
				box-sizing: border-box;
				height: 36rpx;
				background-color: $uni-color-warning;
				border-radius: 18rpx;
				font-size: $uni-font-size-sm;
				color: $uni-text-color-inverse;
				line-height: 36rpx;
				text-align: center;
			}
		}
		.friend-item-r{
			padding-left: 128rpx;
			height: 96rpx;
			.top{
				height: 50rpx;
				.name{
					float: left;
					font-size: 36rpx;
					font-weight: 400;
					color: $uni-text-color;
					line-height: 50rpx;
				}
				.time{
					float: right;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-disable;
					line-height: 50rpx;
				}
			}
			.message{
				height: 46rpx;
				font-size: $uni-font-size-base;
				color: $uni-text-color-grey;
				line-height: 46rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}
		}
		
	}
	// .test{
	// 	width: 100%;
	// 	height: 2000rpx;
	// }
	
</style>
