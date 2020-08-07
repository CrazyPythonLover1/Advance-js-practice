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