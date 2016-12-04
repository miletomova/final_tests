function func( param ){
	var n = +param[0];
	var m = param[1];
	var p = param[2];

	if(isNaN(m)){
	console.log('Parameter not a number');
}
	else{

	m = m.toString().split('');
	var lenOne = m.length;
	var lenTwo;
	var array = [];

	for (var i = 0; i < lenOne; i++) {
		if (!isNaN(+m[i])) {
			array.push(m[i]);
		};
	};

	lenTwo = array.length;

		if(p === true){
			if(lenTwo >= n){
				console.log(array[lenTwo-n]);
			}
			else{
				console.log('The number doesn`t have n digits');
			}
		}
	else{
		if(lenTwo >= n){
				console.log(array[n-1]);
			}
			else{
				console.log('The number doesn`t have n digits');
			}
		}
	}
}
var arr = [6, 923456, false];
func(arr);
