const Input = [2,8,[6],3,3,5,3,4,[5,4],{key:"value"}];
var count = 0;
Input.forEach((element)=>{//using foreach method to iterate array
    if(Array.isArray(element)) count++; //using Array.isArray to chech if element is array or not 
})
console.log(count);