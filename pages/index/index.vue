<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left">
				<image @click="toUserHome()" src="../../static/images/img/user.png" class="admin"></image>
			</view>
			<image src="../../static/images/index/logo.png" class="logo"></image>
			<view class="top-bar-right">
				<image @click="toSearch()" src="../../static/images/index/search.png" class="search"></image>
				<image src="../../static/images/index/add.png" class="add"></image>
			</view>
		</view>
		<view class="main">
			<view class="friend" v-for="item,index in friends" :key="index">
				<image :src="item.imgurl" mode=""></image>
				<view class="friend-content">
					<view class="friend-name ellipsis">
						{{item.name}}
					</view>
					<view class="friend-message ellipsis">
						{{item.message}}
					</view>
				</view>
				<view class="tips">
					<view class="time">
						{{item.time}}
					</view>
					<view class="tip" v-if="item.tip!==0">
						{{item.tip}}
					</view>
				</view>
			</view>
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
			toUserHome: function(){
				uni.navigateTo({
					url:"../userhome/userhome"
				})
			},
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
					v.time=this.changeTime(v.time)
				});
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
		box-shadow: 0 2rpx 0 0 $uni-border-color;
		.admin{
			width: 68rpx;
			height: 68rpx;
			border-radius: 16rpx;
		}
		.logo{
			position: absolute;
			width: 88rpx;
			height: 42rpx;
			bottom: 44rpx;
			left: 50%;
			transform: translate(-50%,50%);
		}
		.search{
			width: 52rpx;
			height: 52rpx;
		}
		.add{
			width: 48rpx;
			height: 48rpx;
		}
		.top-bar-right{
			width: 140rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
	.main{
		.friend{
			height: 128rpx;
			display: flex;
			align-items: center;
			image{
				width: 96rpx;
				height: 96rpx;
				border-radius: 24rpx;
			}
			.friend-content{
				width: 494rpx;
				height: 90rpx;
				margin-left: 32rpx;
				.friend-name{
					height: 50rpx;
					line-height: 50rpx;
					font-size: 36rpx;
					color: #272832;
				}
				.friend-message{
					height: 40rpx;
					line-height: 40rpx;
					font-size: $uni-font-size-base;
					color: $uni-text-color-grey;
				}
			}
			.tips{
				width: 64rpx;
				height: 70rpx;
				.time{
					height: 34rpx;
					text-align: center;
					line-height: 34rpx;
					letter-spacing: -2rpx;
					font-size: $uni-font-size-sm;
					color: $uni-text-color-grey;
				}
				.tip{
					float: right;
					height: 36rpx;
					min-width: 36rpx;
					background-color: #FF5D5B;
					font-size: $uni-font-size-sm;
					color: #FFFFFF;
					text-align: center;
					line-height: 36rpx;
					padding: 0rpx 10rpx;
					border-radius: 18rpx;
					box-sizing: border-box;
					letter-spacing: -2rpx;
				}
			}
		}
	}
	
</style>
