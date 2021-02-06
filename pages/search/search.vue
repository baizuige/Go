<template>
	<view class="content">
		<view class="top-bar">
			<view class="search">
				<image src="../../static/images/search/search.png"></image>
				<input type="search" placeholder="搜索用户/群" placeholder-style="color:#aaa;font-weight:400;" @input="search"/>
			</view>
			<view class="top-bar-right">
				<view class="text" @tap="toIndex">取消</view>
			</view>
		</view>
		<view class="main">
			<view class="search-user result">
				<view class="title">用户</view>
				<view class="list user" v-for="item in items">
					<image :src="item.imgurl"></image>
					<view class="message">
						<view class="name" v-html="item.name"></view>
						<view class="email" v-html="item.email"></view>
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
				uni.navigateTo({
					url:"../index/index"
				});
			},
			loadUser: function(){
				
				this.arr = JSON.stringify(datas.friends());
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
	image{
		display: block;
	}
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
		z-index: 1000;
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
		padding: 88rpx $uni-spacing-col-base 0;
		.result{
			margin-top: $uni-spacing-col-base;
			.title{
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
					// float: left;
				}
				.message{
					flex: 1;
					margin-left: $uni-spacing-col-base;
					// float: left;
					.name{
						font-size: 36rpx;
						color: $uni-text-color;
						line-height: 50rpx;
					}
					.email{
						font-size: $uni-font-size-sm;
						color: $uni-text-color;
						line-height: 28rpx;
					}
				}
				.button{
					// align-self: flex-end;
					width: 120rpx;
					height: 48rpx;
					border-radius: 24rpx;
					font-size: $uni-font-size-sm;
					line-height: 48rpx;
					text-align: center;
				}
				.send{
					color: #272832;
					background-color: $uni-color-primary;
				}
				.add{
					background-color: rgba(74,170,255,0.10);
					color: $uni-color-success;
				}
			}
			
		}
		
	}
</style>
