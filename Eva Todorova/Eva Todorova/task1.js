<!-- 

// Напишете функция, която приема като параметър масив с три елемента - [n, m, p]. Функцията връща n - тата цифра от числото m, в зависимост от стойността на p.
// a. Ако р = true, функцията връща n-тата цифра на числото отдясно -наляво.
// b. Ако p=false - n-тата цифра на числото отляво - надясно.
// Ако числото m е с по-малко от n цифри – функцията отпечатва в конзолата “The number doesn`t have n digits”. Ако подадената стойност за m не е число – “Parameter not a number”.
//  -->


function myFunction (param){
	var n = +param[0]; 
	var m = param[1], leng1, leng2, helper =[];
	var p = true;
	var p = false;


	m = m.toString().split('');
	leng1 = m.length;
	console.log(m);

	for (var i = 0; i < leng1; i++ ) {
		if (! isNaN(+m[i])) {
			console.log('Parameter not a number');
			helper.push(m[i]);
		}
	}
	leng1 = m.length;

	console.log(helper);
	leng2= helper.length;

	if (leng2 >= n || p === true){
		console.log(helper[leng2-n]);
	} else if (leng2<n){
		console.log('not enough numbers');
	}
	// else if (leng2 >= n || p === false) {
	// 	console.log('has to count from left to right');
	// }


	

};

var arr = [4, 566666, true]
myFunction(arr);






