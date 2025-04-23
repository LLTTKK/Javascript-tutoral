
let height = 1.75;
let weight = 65;

let BMI = weight / height / height; // Calculate BMI
console.log(BMI);


// If not use const , and someone remodift the number of height
height = 1;
BMI = weight / height / height; 
console.log(BMI);

console.log("---------------------------------")


//If change use to const

const h1 = 1.75;
let w1 = 65;
h1 = 1; //Will show error at here becase try to change a const 

BMI = w1 / h1 / h1; // Calculate BMI
console.log(BMI);



//IF want to quick comment like "//xxxx"  Then can press "ctrl" and "/".

// e.g.