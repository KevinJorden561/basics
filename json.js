let car = {
    brand: 'Audi',
    year: 2018,
    model: 'A3',
    miles: 25580,
    color: 'Grey'
}

console.log(car)
// javascript console log

const carJson = JSON.stringify(car)

console.log(carJson)
// logging it into JSON

const carParsed = JSON.parse(carJson)

console.log(carParsed)
// logging it back to JavaScript