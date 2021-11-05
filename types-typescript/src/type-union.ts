export {}

// * Union
// 10, '10'
let idUser: number | string
idUser = 10
idUser = '10'

// Buscar username dado un ID
function getUsernameById(id: number | string){
    // Logica de negocio, find the user
    return 'dgdevelop'
}

getUsernameById(20)
getUsernameById('20')

// * Alias de tipos
type IdUser = number | string
type Username = string

let idUser2: IdUser
idUser = 10
idUser = '10'

// Buscar username dado un ID
function getUsernameById2(id: IdUser): Username{
    // Logica de negocio, find the user
    return 'dgdevelop'
}

getUsernameById2(20)
getUsernameById2('20')

// * Tipos Literales
// 100x100, 500x500, 1000x1000
type SquareSize = '100x100' | '500x500' | '1000x1000'
// let smallPicture: SquareSize = '200x200' // !Error
let smallPicture: SquareSize = '1000x1000'
let mediumPircture: SquareSize = '500x500'
