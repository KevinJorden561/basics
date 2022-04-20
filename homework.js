function addNums(num1, num2) {
    const sum = num1 + num2;
    console.log(sum)
}
addNums(11,13)
// adding two numbers in a fuction 11+13 = 24


const num1 = 10
const num2 = 20

function addNums2(num1, num2) {
    return num1 + num2
}
console.log(addNums2(num1, num2))
// another example of adding nums


const array1 = [6, 7, 8, 9, 10, 11];
console.log(array1[0]);
// function to retreive the first element in the array = 6

const array2 = [7, 8, 9, 10, 11, 12];
function getFirstElement(arr){
    return[0]
}
console.log(getFirstElement)

const myCar = {
    make: 'Toyota',
    year: '2007',
    model: 'FJ Cruiser',
    color: 'Black',
}
const { make, model } = myCar

console.log(make, model)
// function to retreive the make and model of object myCar


const testArray = [ true, false, false, true, false,
     false, false, true, true, true, false ]
const count = testArray.filter(value => value === true).length;
console.log(count)
// function that is returning the amount of true values in the array, 5.

const testArray2 = [ true, false, false, true, false,
    false, false, true, true, true, false ]

function checkTrue(arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i]){
            result++
            //result = result + 1
        }
    }
    return result;
}
console.log("This is the result", checkTrue(testArray2))
/* this is another example of returning the 
amount of true value in an array, 5. */