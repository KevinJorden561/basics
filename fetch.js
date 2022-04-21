import fetch from 'node-fetch'

// async function getDataAsync(){
// try {
//     const response = await fetch('https://api.sampleapis.com/beers/ale') // GET -> Promise
//     const data = await response.json()
//     console.log(data)
// } catch (err) {
//     console.error(err)
// }
// }
// getDataAsync()

// code above and below do the same thing are just written differently.


fetch('https://api.sampleapis.com/beers/ale') 
    .then(response => response.json())
    .then(beers => console.log(beers[99]))
    .catch(err => console.log(err))
 


