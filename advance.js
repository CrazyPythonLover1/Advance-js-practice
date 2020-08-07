// Falsy:
// false
// 0
// ""
// NaN
// undefined
// null

// Truthy:
// '0', ' ', []

let name = 0;
if(name || name==0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}