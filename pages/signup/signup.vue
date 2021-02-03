<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="toSignIn">
				<image src="../../static/images/common/back.png"></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/sign/logo1.png"></image>
		</view>
		<view class="main">
			<view class="title">注册</view>
			<view class="inputs">
				<view class="inputs-div">
					<input type="text" placeholder="用户名" class="user" placeholder-style="color:#aaa;font-weight:400;" @input="getUser"/>	
					<view class="employ"  v-if="useremploy">已占用</view>
					<image src="../../static/images/sign/right1.png" class="ok" v-if="isuser"></image>
				</view>
				<view class="inputs-div">
					<input type="text" placeholder="邮箱" class="email" placeholder-style="color:#aaa;font-weight:400;" @input="isEmail"/>
					<view class="employ"  v-if="emailemploy">已占用</view>
					<view class="invalid" v-if="invalid">邮箱无效</view>
					<image src="../../static/images/sign/right1.png" class="ok" v-if="isemail"></image>
				</view>
				<view class="inputs-div">
					<input :type="type" placeholder="密码" class="psw" placeholder-style="color:#aaa;font-weight:400;" @input="getPsw"/>
					<image :src="lookurl" class="look" @tap="looks"></image>
				</view>
			</view>
			<button type="submit" :class="[{uncomplete:isok}]">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				type:'password',
				isuser:true,
				isemail:true,
				invalid:false,
				useremploy:false,
				emailemploy:false,
				look:false,
				lookurl:"../../static/images/sign/look.png",
				isok:true,
				email:'',
				user:'',
				psw:'',
			}
		},
		methods: {
			looks: function(){
				if(!this.look){
					this.type="text";
					this.look=!this.look;
					this.lookurl="../../static/images/sign/biyan.png";
				}else{
					this.type="password";
					this.look=!this.look
					this.lookurl="../../static/images/sign/look.png";
				}
			},
			isEmail: function(e){
				this.email = e.detail.value;
				let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
				if(this.email){
					if(reg.test(this.email)){
						this.invalid=false;
						this.isemail=true;
					}else{
						this.invalid=true;
						this.isemail=false;
					}
				}
				this.isOk();
			},
			getUser: function(e){
				this.user=e.detail.value;
				this.isOk();
			},
			getPsw: function(e){
				this.psw=e.detail.value;
				this.isOk();
			},
			isOk: function(){
				console.log(1,this.isuser,this.isemail,this.psw);
				if(this.isuser&&this.isemail&&this.psw.length>5){
					this.isok=false;
				}else{
					this.isok=true;
				}
			},
			toSignIn: function(){
				uni.navigateTo({
					url:"../signin/signin"
				})
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
			.top-bar-left{
				float: left;
				padding-left: 32rpx;
				height: 88rpx;
				width: 88rpx;
				image{
					margin-top: 21rpx;
					width: 26rpx;
					height: 46rpx;
				}
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
			.inputs{
				margin-top: 8rpx;
				input{
					margin-top: 46rpx;
					height: 84rpx;
					font-size: $uni-font-size-lg;
					color: $uni-text-color;
					line-height: 84rpx;
					border-bottom: 1px solid $uni-border-color;
					box-sizing: border-box;
				}
				.inputs-div{
					position: relative;
				}
				.employ, .invalid{
					position: absolute;
					right: 0;
					top: 0rpx;
					font-size: $uni-font-size-base;
					font-weight: 500;
					color: $uni-color-warning;
					line-height: 84rpx;
				}
				.ok{
					position: absolute;
					top: 36rpx;
					right: 0;
					width: 38rpx;
					height: 30rpx;
				}
				.look{
					 position: absolute;
					 top: 36rpx;
					 right: 0;
					 width: 32rpx;
					 height: 18rpx;
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
			.uncomplete{
				background-color: rgba(39,40,50,0.2);
				color: $uni-text-color-inverse;
				box-shadow: none;
			}
			[class=button-hover]{
				background-color: #f1c40f;
			}
			
		}
		
	}
</style>
