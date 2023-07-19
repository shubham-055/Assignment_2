const Input = ["Testing", "The", "Code","Shubham","Aaaaaaa"] // Input array
const Output = Input.sort((a,b)=>{ //using sort method of array
    if(a.length==b.length){  //if length is equal sort in lexicographicall order
        return a > b ? 1 : -1 
    }
    else return a.length > b.length ? 1 : -1 // else sort according to length
})
console.log(Output)