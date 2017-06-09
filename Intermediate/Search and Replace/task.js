
function myReplace(str, before, after) {

    return str.replace(before, function () {
     var arrAfter=after.split('');
     before.charCodeAt(0)<=90 ? arrAfter.splice(0, 1, after[0].toUpperCase()) : arrAfter.splice(0, 1, after[0].toLowerCase());
      return arrAfter.join(''); 
    });
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
