
function myReplace(str, before, after) {
  //Использовать replace() и в качестве заменителя анонимную функцию
  //заменяющую если надо первую букву.
  if (before.charCodeAt(0)<=90)
    {
    
  
  var arrAfter=after.split(''); //работает
     // after=arrAfter.splice(0, 1, after[0].toUpperCase()).join(''); //не работает
      arrAfter.splice(0, 1, after[0].toUpperCase()); //работает
      after=arrAfter.join(''); // работает
      //after=after.split('').splice(0, 1, after[0].toUpperCase()).join('');
      
      //alert(after);
      //after=after.join('');
    }
  return str.replace(before, after); //первая часть задачи - работает
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
