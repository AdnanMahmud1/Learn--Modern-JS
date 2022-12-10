let largenumber = Number.MAX_SAFE_INTEGER;
largenumber+=1;
largenumber+=1;
//console.log(largenumber);

//optional chaining
const language ={
    name: 'js',
    creator: 'Brandon Eich',
    library: {
        react: {
            company: 'Facebook',
            Estd: 2011
        },
        angular: {
            company: 'Google',
            Estd: 2011
        }
    }
};
let companyName= language?.library?.google?.company;
console.log(companyName)
