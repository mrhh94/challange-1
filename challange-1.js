let massMark = 78;
let heightMark = 1.69;

let massJohn = 92;
let heightJohn = 1.95;

let johnBMI = massJohn / heightJohn ** 2;
let markBMI = massMark / (heightMark * heightMark);
let markHigherBMI = markBMI > johnBMI;

console.log(markBMI, johnBMI, markHigherBMI);