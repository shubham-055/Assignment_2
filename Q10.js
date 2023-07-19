// Write a JavaScript function to check whether an `input` is an array or not.

const arr = [1,2,3]
const string ="shubham"
function Is_Array(Input){
   // return (Input.constructor === Array)
    return (Array.isArray(Input))
}


console.log(Is_Array(arr)); //passing array
console.log(Is_Array({a:1})); //passing object
console.log(Is_Array(string)); //passing string
