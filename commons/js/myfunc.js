export default{
	dateTime(date){
		let old = new Date(date);
		let now = new Date();
		let d = old.getTime();
		let h = old.getHours();
		let m = old.getMinutes();
		let Y = old.getFullYear();
		let M = old.getMonth();
		let D = old.getDate();
		let nd = now.getTime();
		let nh = now.getHours();
		let nm = now.getMinutes();
		let nY = now.getFullYear();
		let nM = now.getMonth();
		let nD = now.getDate();
		
		if(D===nD && M === nM && Y===nY){
			if(h<10){
				h='0'+h;
			}
			if(m<10){
				m='0'+m;
			}
			return  h+':'+m;
		}
	}
}