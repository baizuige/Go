<template>
	<view class="content">
		<view  class="background">
			<view class="bg">
				
			</view>
			<image src="../../static/images/img/user.png" mode="aspectFill"></image>
		</view>
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image class="back" src="../../static/images/common/back.png"></image>
			</view>
			<view class="top-bar-right" >
				<image class="more" src="../../static/images/group/more.png"></image>
			</view>
		</view>
		<view class="main">
			<view class="user-img">
				<image src="../../static/images/img/user.png"  class="avatar"></image>
				<image src="../../static/images/userhome/male.png" class="sex"></image>
			</view>
			<view class="user-name">
				{{user.name}}
			</view>
			<view class="user-nick">
				昵称：{{user.nick}}
			</view>
			<view class="user-intr">
				{{user.intr}}
			</view>
			<view class="button-bar">
				<view class="button">
					加为好友
				</view>
			</view>
		</view>
		<view class="add-msg">
			<view class="name">
				{{user.name}}
			</view>
			<textarea :value="myname+' 请求加为好友~'" maxlength="120" class="add-main" />
		</view>
		<view class="add-bt">
			<view class="close">
				取消
			</view>
			<view class="send">
				发送
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				myname: '轻韬',
				user:{
					name: '白嘴鸽',
					nick: 'baizuige',
					intr: '生活是一部大百科全书，包罗万象；生活是一把六弦琴，弹奏出多重美妙的旋律：生活是一座飞马牌大钟，上紧发条，便会使人获得浓缩的生命。'
				}
			};
		},
		onReady: function(){
			this.getElementStyle();
		},
		methods:{
			backOne: function(){
				uni.navigateBack({
					delta:1
				});
			},
			getElementStyle: function(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.background').boundingClientRect(data=>{
				
				})
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.background{
		position: fixed;
		top: 0;
		left: 0;
		height: 100vh;
		width: 100vw;
		image{
			height: 100%;
			width: 100%;
			filter: blur(12px);
		}
		.bg{
			position: absolute;
			top: 0;
			left: 0;
			height: 100%;
			width: 100%;
			z-index: 10;
			background-color: #FFFFFF;
			opacity: 0.4;
		}
	}
	.top-bar{
		background-color:transparent;
		.top-bar-left{
			.back{
				width: 28rpx;
				height: 44rpx;
			}
		}
		.top-bar-right{
			.more{
				width: 52rpx;
				height: 12rpx;
			}
		}
	}
	.main{
		position: relative;
		.user-img{
			top: 148rpx;
			left: 50%;
			transform: translateX(-50%);
			position: absolute;
			width: 400rpx;
			height: 400rpx;
			border: 6rpx solid #FFFFFF;
			border-radius: 48rpx;
			z-index: 10;
			.avatar{
				width: 400rpx;
				height: 400rpx;
				border-radius: 48rpx;
			}
			.sex{
				position: absolute;
				bottom: 16rpx;
				right: 16rpx;
				padding: 16rpx;
				width: 32rpx;
				height: 32rpx;
				background-color: #FF5D5B;
				border-radius: 50%;
			}
		}
		.user-name{
			font-size: 52rpx;
			color: #272832;
			letter-spacing: -1.8rpx;
			position: absolute;
			top: 596rpx;
			left: 50%;
			transform: translateX(-50%);
		}
		.user-nick{
			font-size: 14px;
			color: #272832;
			letter-spacing: -0.48px;
			position: absolute;
			top: 670rpx;
			left: 50%;
			transform: translateX(-50%);
		}
		.user-intr{
			width: 552rpx;
			font-size: 14px;
			color: #272832;
			background-color: #EEEEEE;
			padding: 20rpx;
			border-radius: 24rpx;
			letter-spacing: -0.48px;
			line-height: 24px;
			position: absolute;
			top: 730rpx;
			left: 50%;
			transform: translateX(-50%);
		}
		.button-bar{
			position: fixed;
			bottom: 0;
			height: 104rpx;
			width: 684rpx;
			.button{
				position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
				margin: auto;
				text-align: center;
				line-height: 80rpx;
				font-size: $uni-font-size-lg;
				color: $uni-text-color;
				width: 684rpx;
				height: 80rpx;
				background: $uni-color-primary;
				border-radius: $uni-border-radius-sm;
			}
		}
	}
	.add-msg{
		position: fixed;
		bottom: 0;
		width: 100%;
		box-sizing: border-box;
		padding: 0 56rpx;
		top: 284rpx;
		bottom: 0;
		background: rgba(255,255,255,1);
		border-radius: 40rpx 40rpx 0 0;
		.name{
			padding-top: 168rpx;
			font-size: 52rpx;
			color: $uni-text-color;
			line-height: 74rpx;
		}
		.add-main{
			padding: 18rpx 22rpx;
			// width: 100%;
			height: 420rpx;
			background: $uni-bg-color-grey;
			border-radius: $uni-border-radius-base;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			line-height: 44rpx;
		}
	}
	.add-bt{
		position: fixed;
		z-index: 100;
		width: 100%;
		bottom: 0;
		height: 104rpx;
		display: flex;
		align-items: center;
		justify-content: space-evenly;
		.close{
			width: 172rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			height: 80rpx;
			background: $uni-bg-color-grey; 
			border-radius: $uni-border-radius-sm;
		}
		.send{
			width: 480rpx;
			text-align: center;
			line-height: 80rpx;
			font-size: $uni-font-size-lg;
			color: $uni-text-color;
			height: 80rpx;
			background: $uni-color-primary; 
			border-radius: $uni-border-radius-sm;
		}
	}
</style>
