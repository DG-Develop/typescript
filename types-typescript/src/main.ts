console.log('Hola TypeScript con Platzi')

// * Number
// Explicito
let phone: number
phone = 1
phone = 5423467
//phone = 'hola' // ! Error


// Inferido
let phoneNumber = 5423467
phoneNumber = 123
//phoneNumber = true // ! Error por tipo

let hex: number = 0xf00d
let binary: number = 0b1010
let octal : number = 0o744

// * Boolean
// Tipado Explicito
let isPro: boolean
isPro = true
//isPro = 1 //! Error

//Inferido
let isUserPro = false
isUserPro = true
//isUserPro = 10 // ! Error

// * String
let username: string = 'dgdband'
username = "david" 
//username = true // ! Error: tipo string

// * Template String
// Uso de back-tick `
let userInfo: string
userInfo = `
    User Info: 
    username: ${username}
    firstName: ${username + ' Gomez'}
    phone: ${phone}
    isPro: ${isPro}
`

console.log('userInfo', userInfo)

