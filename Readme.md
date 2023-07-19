# Assignment_2

Q1 - How do you check if an element exists in an array?

The includes() method is a built-in method in JavaScript that can be used to check if an element exists in an array. The includes() method returns true if the element is found in the array and false if it is not found.

Q2 - How do you check if an element exists in an array?

.map() creates a new array with transformed values.
It returns a new array with the same length as the original array.
The original array remains unchanged.

.forEach() is used to execute a function for each element of an array without returning a new array.
It is primarily used when you want to perform an operation or side effect for each element of the array.
It does not modify the original array.
It Doesn't return anything.

Q3 - What is the difference between .filter() and .find()?

.filter()

The filter() method returns a new array that contains all the elements of the original array that meet a certain condition. The condition is specified as a function that is passed to the filter() method. The function takes an element of the array as its input and returns true if the element should be included in the new array, or false if it should not be included.

For example, the following code uses the filter() method to create a new array that contains all the even numbers from an array of numbers:
```js
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        var evenNumbers = numbers.filter(function(number) {
        return number % 2 === 0;
        });

        console.log(evenNumbers); // [2, 4, 6, 8, 10]
```


.find()

The find() method returns the first element of an array that meets a certain condition. The condition is specified as a function that is passed to the find() method. The function takes an element of the array as its input and returns true if the element meets the condition, or false if it does not meet the condition.

If no element of the array meets the condition, the find() method returns undefined.

For example, the following code uses the find() method to find the first even number from an array of numbers:
```js
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var firstEvenNumber = numbers.find(function(number) {
  return number % 2 === 0;
});

console.log(firstEvenNumber); // 2
```


Q4 - How do we check if a key exists in a JavaScript object?

The in operator is a built-in operator in JavaScript that can be used to check if a property exists in an object. The in operator returns true if the property exists in the object and false if it does not exist.

```js

var myObject = {
  name: "Shubham Jain",
  age: 30,
};

if ("name" in myObject) {
  console.log("The key 'name' exists in the object.");
} else {
  console.log("The key 'name' does not exist in the object.");
}


```

Q5 - What is the output of the following code? Why?
  ```js
//Input
  var a = 3; 
  var b = { a: 9, b: ++a };
  console.log(a + b.a + ++b.b);

//output - 18
  ```
a in declared and initialize with 3 in global scope and when b as object was declaring now b { a:9, b:4 (preincrement 'a' of global scope it become 4 and assign to b)}. In 3rd line a=4 + b.a=9 + b.b=5 (as we are preincrement) so it become 4+9+5 = 18.

Q6. What is the output of the following code? Why?
```js
//Input
  const arrayOfOddNumbers = [1, 3, 5]; 
  arrayOfOddNumbers[100] = 199; 
  console.log(arrayOfOddNumbers.length);

//output - 101
```

An array arrayOfOddNumbers is initialized with values [1, 3, 5].
The element at index 100 is assigned the value 199, which creates "holes" or empty slots till 99 index, and the length property is calculated based on the highest index with a value. In this case, the highest index is 100, resulting in an array length of 101.


Q7. What is the output of the following code? Why?

```js
//Input

function checkAge(data) { 
    if (data === { age: 18 }) 
       { 
         console.log('You are an adult!'); 
       }
   else if (data == { age: 18 }) 
       { 
         console.log('You are still an adult.'); 
       } else { 
           console.log(`Hmm.. You don't have an age I guess`); 
       } 
      } 
    checkAge({ age: 18 });

//output  - Hmm.. You don't have an age I guess  
```

The output is "Hmm.. You don't have an age I guess" as in javascript we cannot compare objects === or == as this comparison will return false because objects are compared by reference, not by value. as memory addresss will be different for both the objects so both will return false and else condition execute always in this scenario.






