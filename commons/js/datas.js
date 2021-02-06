export default{
	friends: function(){
		let friendarr=[
			{
				id:1,
				imgurl: 'four.png',
				tip:0,
				name: "小明",
				email: "1567984@163.com",
				time: new Date(),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:2,
				imgurl: 'three.png',
				tip:25,
				name: "小红",
				email: "1567984@163.com",
				time: new Date(),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:3,
				imgurl: 'one.png',
				tip:2,
				name: "小刚",
				email: "1567984@163.com",
				time: new Date(),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:4,
				imgurl: 'two.png',
				tip:2,
				name: "张三",
				email: "1567984@163.com",
				time: new Date(2021,1,2,8,20),
				message: "你好世界你好世界你好"
			},
			{
				id:5,
				imgurl: 'four.png',
				tip:0,
				name: "小明",
				email: "1567984@163.com",
				time: new Date(2021,1,1,23,16),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:6,
				imgurl: 'three.png',
				tip:1,
				name: "小红",
				email: "1567984@163.com",
				time: new Date(2021,1,1,24,0),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:7,
				imgurl: 'one.png',
				tip:0,
				name: "小刚",
				email: "1567984@163.com",
				time: new Date(2021,0,31,18,28),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:8,
				imgurl: 'two.png',
				tip:0,
				name: "张三",
				email: "1567984@163.com",
				time: new Date(2021,0,30,15,24),
				message: "你好世界你好世界你好"
			},
			{
				id:9,
				imgurl: 'four.png',
				tip:0,
				name: "小明",
				email: "1567984@163.com",
				time: new Date(2021,0,26,16,18),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:10,
				imgurl: 'three.png',
				tip:4,
				name: "小红",
				email: "1567984@163.com",
				time: new Date(),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:11,
				imgurl: 'one.png',
				tip:6,
				name: "小刚",
				email: "1567984@163.com",
				time: new Date(2021, 0, 1, 0, 0),
				message: "你好世界你好世界你好世界你好世界你好世界你好世界你好世界你好世界"
			},
			{
				id:12,
				imgurl: 'two.png',
				tip:100,
				name: "张三",
				email: "1567984@163.com",
				time: new Date(),
				message: "你好世界你好世界你好"
			}
		];
		return friendarr;
	},
	isFriend: function(){
		let isfriend={
			userid:1,
			friends:[2,4,5,8]
		}
		return isfriend;
	}
}