const arr = [1,2,3,45,2,1,4,45]     //array decleration and intialization
const NewArray = arr.reduce((acc,item)=>{    // taking acc(accumulator) as empty array 
    if(!(acc.includes(item)))   //if acc does'nt have array item already present then only push the item into acc
        acc.push(item)
    return acc;     
},[]);
console.log(NewArray); //print new array which was returned from arr.reduce method which doesn't have duplicates