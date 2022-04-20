const myName = 'Kevin'

console.log("Hello", myName || 'guest')
// since statement it truthy it runs myName

const myLastName = ''

console.log("Hello", myLastName || 'guest')
// since statement is falsey it runs guest

