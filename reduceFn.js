const euros = [29.76, 41.85, 46.5];

const sum = euros.reduce((total, amount) => {
    console.log('total is ', total)
    console.log('amount is ', amount)
    total + amount
}); 

// sum // 118.11

const amount = 1000
let b = {'surname': 'sumah'}

let c = {...{amount},...b}
console.log(c)