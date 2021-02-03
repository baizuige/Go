<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-right" @tap="toSignUp">
				注册
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/sign/logo1.png"></image>
		</view>
		<view class="main">
			<view class="title">登录</view>
			<view class="slogan">您好，欢迎来到 yike!</view>
			<view class="inputs">
				<input type="text" placeholder="用户名/邮箱" placeholder-style="color:#aaa;font-weight:400;" @blur="getUser"/>
				<input type="password" placeholder="密码" placeholder-style="color:#aaa;font-weight:400;" @blur="getPsw"/>
			</view>
			<view class="tips">账号或密码错误，请重新输入。</view>
			<button type="submit" @tap="login">登录</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				user:'',
				psw:'',
			}
		},
		methods: {
			toSignUp: function(){
				uni.navigateTo({
					url:"../signup/signup"
				});
			},
			getUser: function(e){
				this.user = e.detail.value;
			},
			getPsw: function(e){
				this.psw = e.detail.value;
			},
			login: function(){
				console.log(this.user,this.psw);
			}
		}
	}
</script>

<style lang="scss">
	.content{
		padding-top: var(--status-bar-height);
		image{
			display: block;
		}
		.top-bar{
			height: 88rpx;
			width: 100%;
			background: $uni-bg-color;
			box-sizing: border-box;
			.top-bar-right{
				float: right;
				padding-right: 32rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				height: inherit;
				line-height: 88rpx;
			}
		}
		.logo{
			width: 194rpx;
			height: 92rpx;
			margin: 178rpx auto 0 auto;
			image{
				width: 194rpx;
				height: 92rpx;
			}
		}
		.main{
			padding: 54rpx $uni-spacing-row-lg;
			position: relative;
			.title{
				font-size: 56rpx;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 80rpx;
			}
			.slogan{
				font-size: 40rpx;
				color: $uni-text-color-grey;
				line-height: 56rpx;
			}
			.inputs{
				margin-top: 8rpx;
				input{
					margin-top: 46rpx;
					height: 84rpx;
					font-size: $uni-font-size-lg;
					font-size: 500;
					color: $uni-text-color;
					line-height: 84rpx;
					border-bottom: 1px solid $uni-border-color;
					box-sizing: border-box;
				}
				
			}
			button{
				margin: 120rpx auto 0;
				width: 520rpx;
				height: 96rpx;
				background-color: $uni-color-primary;
				box-shadow: 0 50rpx 32rpx -36rpx rgba(255,228,49,0.4);
				border-radius: 48rpx;
				font-size: $uni-font-size-lg;
				font-weight: 500;
				color: $uni-text-color;
				line-height: 96rpx;
				
			}
			.button-hover{
				background-color: #f1c40f;
			}
			.tips{
				position: absolute;
				font-size: $uni-font-size-lg;
				color: $uni-color-warning;
				line-height: 56rpx;
				// display: none;
			}
		}
		
	}
</style>
