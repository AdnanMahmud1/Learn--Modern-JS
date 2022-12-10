 
export const log =console.log;


let myArray=[
    {id: 2, name:"evan"},
]
let mySet = new Set(myArray);
var obj = {id: 3, name:"zayan"};

mySet.add(obj).add(obj)

//log(myArray);
//log(mySet);
//union

let a =new Set([1,2,3]);
let b =new Set([7,2,4]);

let union = new Set([...a, ...b])

//log(union);

//intersection

let intersection =new Set([...a].filter(x=> 
    b.has(x)));

log(intersection);