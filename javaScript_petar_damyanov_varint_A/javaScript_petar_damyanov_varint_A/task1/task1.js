function solve(param) {
  var help=[],moreHelp=[];
  var str=param;
  str=str.split('');
  for (var i = 0; i <str.length; i++) {
    if (!isNaN(+str[i])) {
      if (str[i]!=0) {
        help.push(+str[i]);
      }
    }
  }
  var len=str.length;
   if (param == 0) {
     console.log('The input must not be an empty string');
  }else if (help==0) {
    console.log('The input values must be convertible to a number');
   }else {
    for (var j = 0; j < help.length; j++) {
      if (help[j]!=help[j+1] && help[j]!=help[j+2] && help[j]!=help[j+3] && help[j]!=help[j+4] ) {
         moreHelp.push(help[j]);
      }
    }
    console.log(moreHelp);
   }
}
solve('');
solve('asdas');
solve('1 br 2 1 werr 3 1');
solve('123');
solve('1 2 2 6 8 6 7 8')
solve('1 br 2 1 werr 3 1');
