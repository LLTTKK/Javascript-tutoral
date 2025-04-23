const globalVariable = "Global";

if (true){
    const localVariable = "Local";
    console.log("gloable Variable ", globalVariable)
    console.log("Local Variable " , localVariable);

}


console.log("gloable Variable ", globalVariable)// Since it is a global aVariable , it can access all around
console.log("Local Variable " , localVariable);// Since the If condiction is end , it can not access , then will jump Error 