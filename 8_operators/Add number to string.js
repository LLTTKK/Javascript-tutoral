console.log("123"+4);// When adding a string to number , it will transfer number to string 
console.log(1+"234");//Same , when adding number to string  , it will transfer number to string

const str3 = 1 + 2 +"3" + 4 + 5;// calculate from the left , mean Frist ->1+2=3 -> "33" (Turn into string) ->"334" -> "3345" 
console.log(str3)

const age = 18
const str4 = "This year , I am " + age.toString() + " years old";
console.log(str4);