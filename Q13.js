
var Input = ["Test", true, null, false, 0]
var output = Input.filter(element => { //using filter method to filter all the element that passes condition
     return element;
})
console.log(output);

//output -  [ 'Test', true ]