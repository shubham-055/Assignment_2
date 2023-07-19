var Input = [
{ name: 'Rohan', physics: 20, chemistry: 18, math: 26 }, 
{ name: 'Geeta', physics: 29, chemistry: 30, math: 22 },
{ name: 'Kunal', physics: 27, chemistry: 25, math: 21 }, 
{ name: 'Abhishek', physics: 21, chemistry: 26, math: 23 },
{ name: 'Aashish', physics: 25, chemistry: 16, math: 18 }
];

var Output = Input.reduce((acc,element)=>{
    let key=element.name
    acc[key] = element.physics + element.chemistry + element.math;
    return acc;
},{})

console.log(Output);