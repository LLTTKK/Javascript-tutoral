const condition = false;

if(condition){
    console.log("Condaition True");
}

console.log("Program end.");


const cond = true;

if(cond){
    console.log("Condaition True");
}

console.log("Program end.");

console.log("------------------------");

let Height = 160;
let weight = 40;
let BMI = weight / (Height/100) **2;

if (BMI <18.5 ){
    console.log("Too ligh")
}




console.log("------------------------");

BMI = weight / (Height/100) **2;

if (BMI <18.5 ){
    console.log("Too ligh")
}else {
    console.log("BMI : " , BMI);
    console.log("No overligh");
}



console.log("------------------------");

weight = 50
BMI = weight / (Height/100) **2;

if (BMI <18.5 ){ // If BMI < 18.5 , False , will not execulate 
    console.log("Too ligh")
}else {//Then execualte this 
    console.log("BMI : " , BMI);
    console.log("No overligh");
}



