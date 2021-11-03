// Crear una Fotografia
/* function createPicture(title, date, size){
    // title
} */
type SquareSize = '100x100' | '500x500' | '1000x1000'

// Usamos TS, definimos tipos para parametros
function createPicture(title: string, date: string, size: SquareSize) {
    // Se crea la Fotografia
    console.log('create Picture using', title, date, size)
}

createPicture('My Birthday', '2020-03-10', '500x500')
//createPicture('Colombia Trip', '2020-03')

// Parametros Opcionales en funciones
function createPicture2(title?: string, date?: string, size?: SquareSize) {
    // Se crea la Fotografia
    console.log('create Picture using', title, date, size)
}

createPicture2('My Birthday', '2020-03-10', '500x500')
createPicture2('Colombia Trip', '2020-03')
createPicture2('Colombia Trip')
createPicture2()

// Flat Array Funcion
let createPic = (title: string, date: string, size: SquareSize): object => {
    return {
        title,
        date,
        size
    }
}

const picture = createPic('Platzi session', '2020-03-10', '100x100')
console.table(picture)

// Tipo de retorno con TypeScript
function handleError(code: number, message: string): never | string {
    // Procesamiento del codigo, mensaje
    if (message === 'error') {
        throw new Error(`${message}. Code error: ${code}`)
    } else {
        return 'An error has occurred'
    }
}

try {
    let result = handleError(200, 'OK') // String
    console.log('result', result)

    result = handleError(404, 'error') // never
    console.log('result', result)
} catch (error) {
    
}