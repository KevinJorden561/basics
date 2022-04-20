//let firstName = null
let firstName = 'Kevin'
let lastName = 'Jorden'


if(firstName){
    console.log(`Hello world, ${firstName}`)
} else if(lastName){
    console.log('My last name is '+ lastName)
} else {
    console.log('Hello world, stranger')
}

const today = 'Tuesday'

let result = today === "Monday"? "Kevin is getting paid" : "Kevin is broke"
console.log(result)

//switch

const fruit = ''

switch(fruit){
    case 'apple':
        console.log('This is an apple')
        break
    case 'orange':
        console.log('this is an orange')
        break
    default:
        console.log('We are out of fruits')
        break    
}
//working on functions now
function doSomething(){
    console.log("I am actually doing nothing")
}

doSomething()

function sum(a, b){
    const result = a + b
    return result
}

let addition = sum(2, 7)
console.log('The sum is', addition)