var numbers = [1, 3, 5, 7];

var findMy = numbers.filter((currentValue, index, arr) => {
  
  return currentValue > 3;
});

console.log(findMy);