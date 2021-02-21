<template>
	<view class="content">
		<view class="top-bar">
			<view class="search top-bar-left">
				<input type="search" placeholder="搜索用户/群" placeholder-style="color:#aaa;font-weight:400;" @input="search"/>
				<image src="../../static/images/search/search.png"></image>
			</view>
			<view class="top-bar-right">
				<view class="back" @tap="toIndex">返回</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title">用户</view>
				<view class="list user" v-for="item in items">
					<navigator url="../userhome/userhome?id=0"class="top-bar-left">
						<image :src="item.imgurl"></image>
					</navigator>
					<view class="user-content">
						<view class="name ellipsis" v-html="item.name"></view>
						<view class="email ellipsis" v-html="item.email"></view>
					</view>
					<view class="button send">发消息</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import datas from "../../commons/js/datas.js";
	export default {
		data() {
			return {
				arr:[],
				items:[]
			};
		},
		methods:{
			//深拷贝浅拷贝！！！！！！
			toIndex: function(){
				uni.navigateBack({
					delta:1
				})
			},
			loadUser: function(){
				this.arr = JSON.stringify(datas.friends());
				console.log(this);
			},
			search: function(e){
				this.items=[];
				let searchval = e.detail.value;
				if(searchval){
					this.searchUser(searchval);
				}
			},
			searchUser: function(e){
				if(this.arr.length===0){
					this.loadUser();
				}
				let item=[];
				for(let v of JSON.parse(this.arr)){
					if(v.name.includes(e)||v.email.includes(e)){
						item.push(v);
					}
				}
				item=JSON.stringify(item);
				let friend=datas.isFriend().friends;
				for(let v of JSON.parse(item)){
					if(friend.includes(v.id)){
						v.imgurl = '../../static/images/img/'+v.imgurl;
						v.name = v.name.replace(e,`<span style="color:#4AAAFF;">${e}</span>`);
						v.email = v.email.replace(e,`<span style="color:#4AAAFF;">${e}</span>`);
						this.items.push(v);
					}
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "../../commons/css/mycss.scss";
	.top-bar{
		box-shadow: 0 2rpx 0 0 $uni-border-color;
		.search{
			width: 600rpx;
			height: 60rpx;
			background-color: $uni-bg-color-grey;
			border-radius: 10rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding-left: 12rpx;
			input{
				flex: 1;
			}
			image{
				padding: 0 12rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
		.back{
			width: 56rpx;
			height: 56rpx;
			font-size: $uni-font-size-base;
			line-height: 56rpx;
			color: #272832;
			letter-spacing: -0.96rpx;
		}
	}
	.main{
		.result{
			margin-top: 34rpx;
			.title{
				letter-spacing: -1.5rpx;
				font-size: 44rpx;
				font-weight: 600;
				color: $uni-text-color;
				line-height: 60rpx;
			}
			.list{
				padding: 20rpx 0;
				display: flex;
				align-items: center;
				image{
					width: 80rpx;
					height: 80rpx;
					border-radius: $uni-border-radius-base;
				}
				.user-content{
					flex: 1;
					margin-left: 32rpx;
					.name{
						height: 50rpx;
						line-height: 50rpx;
						font-size: 36rpx;
						color: #272832;
					}
					.email{
						font-size: $uni-font-size-sm;
						color: $uni-text-color;
						height: 30rpx;
						line-height: 30rpx;
					}
				}
				.button{
					width: 120rpx;
					height: 48rpx;
					border-radius: 24rpx;
					font-size: $uni-font-size-sm;
					line-height: 48rpx;
					text-align: center;
				}
				.send{
					background-color: $uni-color-primary;
					font-size: 24rpx;
					color: #272832;
					letter-spacing: -0.82rpx;
				}
			}
		}
		
	}
</style>
