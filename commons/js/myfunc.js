// export default{
// 	dateTime(date){
// 		let old = new Date(date);
// 		let now = new Date();
// 		let d = old.getTime();
// 		let h = old.getHours();
// 		let m = old.getMinutes();
// 		let Y = old.getFullYear();
// 		let M = old.getMonth();
// 		let D = old.getDate();
// 		let nd = now.getTime();
// 		let nh = now.getHours();
// 		let nm = now.getMinutes();
// 		let nY = now.getFullYear();
// 		let nM = now.getMonth();
// 		let nD = now.getDate();
		
// 		if(D===nD && M === nM && Y===nY){
// 			if(h<10){
// 				h='0'+h;
// 			}
// 			if(m<10){
// 				m='0'+m;
// 			}
// 			return  h+':'+m;
// 		}
// 	}
// }
export default{
	dateTime(time){
		let now = new Date();
		let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
		if(Date.parse(time)>=Date.parse(today)){
			return `${(time.getHours()+'').padStart(2,'0')}:${(time.getMinutes()+'').padStart(2,'0')}`;
		}else if(Date.parse(time)>=Date.parse(today)-1000*60*60*24){
			return '昨天';
		}else if(Date.parse(time)>=(Date.parse(today)-1000*60*60*24*7)){
			let week = ['日','一','二','三','四','五','六'];
			return `星期${week[time.getDay()]}`;
		}else{
			return `${time.getFullYear()}-${(time.getMonth()+1+'').padStart(2,'0')}-${(time.getDate()+'').padStart(2,'0')}`;
		}
	}
}