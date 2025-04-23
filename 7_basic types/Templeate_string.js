const r =5;
const area = r*r*3.14;
const str =  // Hard to read 
    "cen of cir is " +r.toString() + ", area of cir is " + area.toString() + " sqir." ;
console.log(str);

console.log("-------------------------------");

//If use templeate string 

const str2 = `cen of cir is ${r} cm , area of cir is ${area} sqir.`;//Use ${} to to templeate string
console.log(str2);