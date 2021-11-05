// * object
let user: object
user = {} // Object

user = {
    id: 1,
    username: 'dgdvelop',
    firstName: 'David',
    isPro: true
}

console.table(user)

// * Object vs object (ClaseJS vs Tipo TS)
const myObj = {
    id: 1,
    username: 'dgdvelop',
    firstName: 'David',
    isPro: true
}

const isInstance = myObj instanceof Object // clase Object de JavaScript
console.log('isInstance', isInstance)

console.log('myObj.username', myObj.username)