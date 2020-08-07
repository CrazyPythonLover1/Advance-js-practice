const numbers = [3,4,5,6,7,8]
const output = [];

for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element * element
    output.push(result);
}

// Squre with map function

const result = numbers.map(function(element){
    return element *element;
})

const result2 = numbers.map(element => element*element);

const result3 = numbers.map(x=>x*x);

// filter function output a array
const bigger =  numbers.filter(x => x>5 );

// find function output a value 
const isThere = numbers.find(x => x > 5);

// ////////////////////////////////////////////

const students = [
    {id:21, name: 'Omar Sunny'},
    {id:31, name: "maannaa"},
    {id:41, name: 'Minul islam faruqi'},
    {id:51, name: "Mohammad Mainul islam"}
];
console.log(students[1].name);

const nameArray = [];
for(let i = 0; i<students.length; i++){
    const nameElement = students[i].name;
    nameArray.push(nameElement);
}
console.log(nameArray);

const name = students.map(student => student.name);
const ids = students.map(student => student.id);

const bigger2 = students.filter(student => student.id>40);
const biggerOne = students.find(student => student.id>40);
console.log(biggerOne);