export {}
// * Tuplas

// [1, 'user']
let user: [number, string]
user = [1, 'dgdband']

console.log('user',user)
console.log('username', user[1])
console.log('username.length', user[1].length)
console.log('id', user[0])

// Tuplas con varios valores
//id, username, isPro
let userInfo: [number, string, boolean]
userInfo = [2, 'angel123', true]

console.log('userInfo', userInfo)

// Arreglo de tuplas
let array: [number, string][] = []
array.push([1,'dgdevelop'])
array.push([2,'angel123'])
array.push([3,'beats'])

console.log('array',array)

// Uso de funciones Array
// beats -> beats1708

array[2][1] = array[2][1].concat('1708')

console.log('array',array)