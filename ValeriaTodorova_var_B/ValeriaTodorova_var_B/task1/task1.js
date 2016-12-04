function myFunc(param){

	var n = +param[0];
	var p = param[2];
	var m = param[1], len1, len2, helper = [];

	m = m.toString().split('');

	len1 = m.length;

	for (var i = 0; i < len1; i++) {
       		if(!isNaN(+m[i])){
			helper.push(m[i]);
			}
	}
		len2 = helper.length;
	    if (len2>=n) {
	    console.log(helper[len2-n])

}else if (len2<n ) {
	console.log('The number doesn`t have 10 digits')
}else{	
console.log('Parameter not a number')
	}

	//console.log(m[len-n]);
	//console.log(n);
	//console.log(typeof(m));
	//3, "pokughbv", false
}
var arr = [5, 1451.78, true];
myFunc(arr);