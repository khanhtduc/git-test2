const numbers = [1, -2, 3, 4,-3];

//
let result = numbers.filter(function(value,index){
    return value >=0;
});
console.log(result);

//Using arrow functions
let result2 =numbers.filter((value) => value >=0)
   
console.log(result2);