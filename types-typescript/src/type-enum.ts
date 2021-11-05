// * ENUM
// Orientacion para Fotografias
/* const landscape = 0
const portrait = 1
const square = 2
const panorama = 3 */

enum PhotoOrientacion{
    Landscape,
    Portrait,
    Square,
    Panorama
}

const landscape: PhotoOrientacion = PhotoOrientacion.Landscape
console.log('landscape', landscape)
console.log('landscape', PhotoOrientacion[landscape])

enum PictureOrientation {
    Landscape = 10,
    Portrait,// 11
    Square,//12
    Panorama//13
}

console.log('Portrait', PictureOrientation.Portrait)

enum Country {
    Bolivia = 'bol',
    Colombia = 'col',
    Mexico = 'mex',
    EEUU = 'esp'
}

const country: Country = Country.Mexico
console.log('country', country)