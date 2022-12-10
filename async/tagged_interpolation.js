function modifier(strings, ...values){
    const m = strings.reduce((prev, current)=>{
        return prev+ current+ (values.length? "Mr. "+ values.shift(): "");
    })
    return m;

}

const player1 = 'Pablo';
const player2 = 'Estate';

console.log(modifier`This team have 2 player ${player1} and ${player2} `)