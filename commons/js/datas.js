export default{
	friends: function(){
		let date = new Date();
		let friendarr=[
			{
				id:1,
				name: "李明",
				imgurl: 'one.png',
				tip:8,
				email: "xiaomin@163.com",
				time: date,
				message: "如果再给我一次机会，我一定会珍惜！"
			},
			{
				id:2,
				name: "王红",
				imgurl: 'two.png',
				tip:0,
				email: "xiaohong@163.com",
				time: new Date(date-1000*60*24),
				message: "我喜欢你对我歪头笑笑"
			},
			{
				id:3,
				name: "陈刚",
				imgurl: 'three.png',
				tip:15,
				email: "xiaogang@163.com",
				time: new Date(date-1000*60*60*24),
				message: "也许你毕业后远离他乡，也许你毕业后会和别人在一起，我只想偷偷的暗恋你、祝福你。"
			},
			{
				id:4,
				name: "路由器",
				imgurl: 'four.png',
				tip:156,
				email: "lyq@gmail.com",
				time: new Date(date-1000*60*60*24*30),
				message: "我不知道该说什么，总之，大家都好好的吧！开心的。。。我也会。。。"
			}
		];
		return friendarr;
	},
	isFriend: function(){
		let isfriend={
			userid:0,
			friends:[1,2,3,4]
		}
		return isfriend;
	}
}