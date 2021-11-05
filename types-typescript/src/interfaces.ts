export { }
// Funcion para mostrar una Fotografia
enum PhotoOrientacion {
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Picture {
    title: string
    date: string
    orientation: PhotoOrientacion
}

function showPicture(picture: Picture) {
    console.log(`[title: ${picture.title}, 
        date: ${picture.date}, 
        orientation: ${picture.orientation}]`)
}

let myPic = {
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientacion.Landscape
}

showPicture(myPic)
showPicture({
    title: 'Test Title',
    date: '2020-03',
    orientation: PhotoOrientacion.Portrait,
    //extra: 'test' //!Error
})

interface PictureConfig {
    title?: string
    date?: string
    orientation?: PhotoOrientacion
}

function generatePicture(config: PictureConfig) {
    const picture = { title: 'Default', date: '2020-03' }

    if (config.title) {
        picture.title = config.title
    }

    if (config.date) {
        picture.date = config.date
    }

    return picture
}

let picture = generatePicture({})
console.table(picture)

picture = generatePicture({ title: 'Travel Pic' })
console.table(picture)


picture = generatePicture({ title: 'Travel Pic', date: '2021-05' })
console.table(picture)

// Interfaz: Usuario
interface User {
    readonly id: number // solo lectura
    username: string
    isPro: boolean
}

let user: User
user = { id: 10, username: 'dgdevelop', isPro: true }
console.log('user', user)
user.username = 'paprazzi'
//user.id = 20 // !Error
console.log('user', user)
