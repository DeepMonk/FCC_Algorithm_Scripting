
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  //значения все есть - составить логику.
  //если соответствуют названия свойств:
  alert(source.hasOwnProperty(Object.keys(collection[0])[0])); //соответствие названий свойств
  //смотрим значения свойств если предыдущее true:
  var name = Object.keys(collection[0])[0]; 
  var prop = Object.keys(source)[0]; 
  //alert(name);//first
  //alert(prop); //last
  //alert(collection[0][name]); //Romeo
 // alert(source[prop]); //Capulet
  if (source[prop]==collection[0][name])
    {
      alert ("ok");
    }
  else alert("not");
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });