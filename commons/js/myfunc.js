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
			return `${(time.getMonth()+1+'').padStart(2,'0')}-${(time.getDate()+'').padStart(2,'0')}`;
		}
	}
}