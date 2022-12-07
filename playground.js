// var js = {
//     name: 'javascript',
//     libraries: ['Angular', 'React', 'VUE'],
//     printLibs: function(){
//             this.libraries.forEach((a) =>{ console.log(`${this.name} loves ${a}`)
//         })
//     }
// }

// js.printLibs();

// var pename= (n) =>{
//     this.name= n;
// }
// var p1= new pename('adnan');
// console.log(p1.name)

// var age= 5;

// var type= (age >= 18) ? 'Adult'
//                       : (age >= 10) ? 'Teenager'
//                       :(age > 5)? 'kid': ()=>{ console.log('child') };
// console.log(`you are a ${type}`);

var numbers = [1, 3, 5, 7];

// var findmy = numbers.filter((currnetval, index, arr) => {
  
//   return currnetval > 8;
// });

// //console.log(findmy);

// var sliceRes = numbers.slice(-2, 5);
// console.log(sliceRes);
// var result = numbers.splice(1, 2, 57,88,99,101)

// console.log(numbers);
// var result = numbers.map((currnetval, index, arr)=>{
//     return currnetval *2;
// })

// console.log(result);
// var result = numbers.reduce((perv, currnetval)=>{
//     return  perv+ currnetval;
// },0)
//  console.log(result);

// var myObj={
//     name: 'Evan',
//     age: '6',
//     born: 2016
// }
// var result = Object.entries(myObj)
// console.log(result);

//------Spread Operator
var newNumbers= [...numbers]
numbers.push(4);
console.log(newNumbers);