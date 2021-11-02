// * Corchetes []

// Explicito
let users: string[]
users = ['dgdvelop', 'chocolove', 'punkdepth']
// users = [1, true, 'test'] // ! Error

// Inferido
let otherUsers = ['dgdvelop', 'chocolove', 'punkdepth']
//otherUsers = [1, true, 'test'] // ! Error

// * Array<TIPO>
let pictureTitles: Array<string>
pictureTitles = ['Favorite Sunset', 'Vacation Time', 'Landscape']

// * Accediendo a los valores en un Array
console.log('First User: ', users[0])
console.log('First Title: ', pictureTitles[0])

// * Propiedades en Array
console.log('users.length', users.length)

// * Uso de funciones en Arrays
users.push('PlatziUser')
users.sort()
console.log('users', users)