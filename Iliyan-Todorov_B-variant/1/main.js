(function () {
    function arrN(arr) {
        var numString,
            numArr,
            n = arr[0],
            m = arr[1],
            p = arr[2];

        if (typeof m !== 'number') {
            throw 'Parameter not a number.';
        }

        p = p || false;

        numString = Math.abs(m) + '';

        if (numString.length < n) {
            throw 'The number doesn\'t have ' + n + ' digits.';
        }

        numArr = numString.split('.').join('').split('');

        if (p === true) {
            numArr.reverse();
        }
        
        return +numArr[n - 1];
    }


    console.log(arrN([1, 9, true]));
    console.log(arrN([2, -351, false]));
    console.log(arrN([6, 923456, false]));
    console.log(arrN([4, 1451.78, true]));
    console.log(arrN([10, -878.225, true]));

} ());