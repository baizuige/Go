<template>
	<view class="content">
		<view class="top-bar">
			<view class="top-bar-left" @tap="backOne">
				<image src="../../static/images/common/back.png" class="back" mode="aspectFit"></image>
			</view>
			<view class="top-bar-center">
				详细
			</view>
		</view>
		<view class="main">
			<view class="info">
				<view class="avatar normal">
					<view class="title">
						头像
					</view>
					<view class="detail">
						<image :src="imgurl" mode=""></image>
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="normal">
					<view class="title">签名	</view>
					<view class="detail ellipsis">好好学习，天天向上。</view>
					<view class="more">	
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="normal">
					<view class="title">注册</view>
					<view class="detail">2021-01-01 13:32:45</view>
					<!-- <view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view> -->
				</view>
			</view>
			<view class="data">
				<view class="normal">
					<view class="title">
						昵称
					</view>
					<view class="detail">
						白嘴鸽
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="normal">
					<view class="title">性别</view>
					<view class="detail">
						<picker :range="array" @change="bindPickerCHange" :value="index">
							<view>{{array[index]}}</view>
						</picker>
					</view>
					<view class="more">	
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="normal">
					<view class="title">生日</view>
					<view class="detail">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange">
							<view>{{date}}</view>
						</picker>
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="normal">
					<view class="title">电话</view>
					<view class="detail">17600001111</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
				<view class="normal">
					<view class="title">邮箱</view>
					<view class="detail">baizuige@gmail.com</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="psw">
				<view class="avatar normal">
					<view class="title">
						密码
					</view>
					<view class="detail">
						{{psw}}
					</view>
					<view class="more">
						<image src="../../static/images/common/more.png" mode="aspectFit"></image>
					</view>
				</view>
			</view>
			<view class="button-bar">
				<view class="button">
					退出应用
				</view>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				imgurl:'../../static/images/img/user.png',
				user:{
					psw:'123456'
				},
				array: ['男','女','保密'],
				index: 0,
				date:currentDate,
			};
		},
		computed:{
			psw:function(){
				return '·'.repeat(this.user.psw.length);
			},
			startDate(){
				return this.getDate('start');
			},
			endDate(){
				return this.getDate('end');
			}
		},
		methods:{
			backOne: function(){
				uni.navigateBack({
					delta:1
				})
			},
			bindPickerCHange: function(e){
				this.index=e.target.value;
			},
			bindDateChange: function(e){
				this.date = e.target.value;
			},
			getDate(type){
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth();
				let day = date.getDate();
				if(type==='start'){
					year=year-60;
				}else if(type==='end'){
					year=year+2;
				}
				month = month>9?month:'0'+month;
				day=day>9?day:'0'+day;
				return `${year}-${month}-${day}`;
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
		box-shadow: 0 2rpx 0 0 $uni-border-color;
		.top-bar-left{
			.back{
				width: 28rpx;
				height: 44rpx;
			}
		}
		.top-bar-center{
			position: absolute;
			bottom: 44rpx;
			left: 50%;
			transform: translate(-50%,50%);
			font-size: 40rpx;
			color: #272832;
			letter-spacing: -1.38rpx;
		}
	}
	.main{
		padding: 118rpx 0 0 0;
		.info,.data,.psw{
			box-sizing: border-box;
			box-shadow: 0 2rpx 0 0 $uni-border-color;
			padding: 0 32rpx;
			margin-top: 12rpx;
			.normal{
				height: 112rpx;
				display: flex;
				align-items: center;
				font-size: 32rpx;
				letter-spacing: -1.1rpx;
				.title{
					color: #272832;
				}
				.detail{
					flex: 1;
					margin:0 32rpx;
					color: rgba(39,40,50,0.60);
					image{
						width: 104rpx;
						height: 104rpx;
						border-radius: 20rpx;
					}
				}
				.more{
					image{
						width: 28rpx;
						height: 28rpx;
					}
				}
			}
			.avatar{
				height: 148rpx;
			}
		}
		.button-bar{
			position: fixed;
			bottom: 0;
			left: 34rpx;
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
				color: #FF5D5B;
				width: 684rpx;
				height: 80rpx;
				border-radius: $uni-border-radius-sm;
			}
		}
	}
</style>
