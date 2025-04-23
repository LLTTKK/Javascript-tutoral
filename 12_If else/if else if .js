
let Height = 160;
let weight = 50;

weight = 80

BMI = weight / (Height/100) **2;

if (BMI <18.5 ){ // If BMI < 18.5 , False , will not execulate 
    console.log("Too ligh")
}else if (BMI > 24){
    console.log("BMI : " , BMI);
    console.log("Too heavy");
}else {//Then execualte this 
    console.log("BMI : " , BMI);
    console.log("Normal");
}


console.log("------------------------");

// Can do a lazy way

if(BMI > 24) console.log("too heavy")