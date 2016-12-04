// Напишете функция, която приема като 
// параметър масив. Функцията връща броя на 
// нарастващите редици числа. Ако два последователни 
// елемента са равни – редицата се счита за нарастваща. 
// Ако масива съдържа елемент нечисло – функцията 
// връща – Array must  include only numbers!

// Input   			             Output
// []               			Enter a non empty array
// [0]		            			1
// [-1, 0, 1, 2, 1, 4, 10, 9, 15, 1]		4	
// [3, 4, 0, 0, 1, 2, 1, 2]         		3
// [10, 0, 0, 1, ‘tt’]        			Array must  include only numbers! 
// [3, ‘pokughbv’, false]        		Array must  include only numbers!


function ascending_rows(param){
	var len, count = 1;

	len = param.length;
if (len>0) {
	for(var i = 0; i < len; i++){
		console.log(isNaN(+param[i]));
		if (isNaN(+param[i]) || param[i] === true) {
			return 'Array must  include only numbers';
		}
	}

	for (var j = 1; j < len; j++){
		if (+param[j-1] > +param[j]) {
			count++;
		}
	}

	return count;
} else {
	return "enter non empty array";
}

}

var arr = ['3', 0, '0', 1, 3, 4, '0'] ;
console.log(ascending_rows(arr));