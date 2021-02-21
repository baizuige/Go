<template>
	<view class="content">
		<view  class="background">
			<view class="bg" :animation="animationData_5">
				
			</view>
			<image src="../../static/images/img/user.png" mode="aspectFill"></image>
		</view>
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image class="back" src="../../static/images/common/back.png"></image>
			</view>
			<view class="top-bar-right" @tap="toDetail">
				<image class="more" src="../../static/images/group/more.png"></image>
			</view>
		</view>
		<view class="main">
			<view class="user-img" :animation="animationData_2">
				<image src="../../static/images/img/user.png"  class="avatar" :animation="animationData_3"></image>
				<image src="../../static/images/userhome/male.png" class="sex" :animation="animationData_4"></image>
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
				<view class="button" @tap="addFriendAnimat">
					加为好友
				</view>
			</view>
		</view>
		<view class="add-msg" :style="{height:addHeight+'px',bottom:-+addHeight+'px'}" :animation='animationData'>
			<view class="name">
				{{user.name}}
			</view>
			<textarea :value="myname+'请求加为好友~'" maxlength="120" class="add-main" />
		</view>
		<view class="add-bt" :animation="animationData_1">
			<view class="close" @tap="addFriendAnimat">
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
				},
				addHeight:'',
				animationData:{},
				animationData_1:{},
				animationData_2:{},
				animationData_3:{},
				animationData_4:{},
				animationData_5:{},
				isAdd:false,
				sexShow:true
			};
		},
		onReady(){
			this.getElementStyle();
		},
		methods:{
			backOne: function(){
				uni.navigateBack({
					delta:1
				});
			},
			toDetail: function(){
				uni.navigateTo({
					url: '../userdetail/userdetail'
				})
			},
			getElementStyle: function(){
				const query = uni.createSelectorQuery().in(this);
				query.select('.background').boundingClientRect(data=>{
					this.addHeight = data.height-186;
					console.log(this.addHeight)
				}).exec();
			},
			addFriendAnimat: function(){
				this.isAdd = !this.isAdd;
				// this.sexShow = !this.sexShow;
				let animation = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				});
				let animation_1 = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				});
				let animation_2 = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				});
				let animation_3 = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				});
				let animation_4 = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				});
				let animation_5 = uni.createAnimation({
					duration:300,
					timingFunction:'ease'
				});
				if(this.isAdd){
					animation.bottom(0).step();
					animation_1.bottom(0).step();
					animation_2.width(120).height(120).top(82).left(30).step();
					animation_3.width(120).height(120).step();
					animation_4.opacity(0).step();
					animation_5.backgroundColor('rgba(255,228,49,1)').step();
				}else{
					animation.bottom(-this.addHeight).step();
					animation_1.bottom(-104).step();
					animation_2.width(200).height(200).top(74).left(87.5).step();
					animation_3.width(200).height(200).step();
					animation_4.opacity(1).step();
					animation_5.backgroundColor('#FFFFFF').step();
				}
				this.animationData = animation.export();
				this.animationData_1 = animation_1.export();
				this.animationData_2 = animation_2.export();
				this.animationData_3 = animation_3.export();
				this.animationData_4 = animation_4.export();
				this.animationData_5 = animation_5.export();
			},
			
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
			opacity: 0.6;
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
			// left: 50%;
			left: 175rpx;
			// transform: translateX(-50%);
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
		// top: 284rpx;
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
		bottom: -104rpx;
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
