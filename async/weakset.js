
//weakset only accept object
let myArray=[
    {id: 2, name:"evan"},
]

var obj = {id: 3, name:"zayan"};


const ws= new WeakSet([{id: 3, name:"zayan"}]);

ws.add(obj)
console.log(ws);