export { }

enum PhotoOrientacion {
    Landscape,
    Portrait,
    Square,
    Panorama
}

// Superclase
abstract class Item{
    protected readonly _id: number
    protected _title: string

    constructor(id: number, title: string){
        this._id = id
        this._title = title
    }

    get id() {
        return this._id
    }

    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
    }
}

class Picture extends Item{
    static photoOrientation = PhotoOrientacion
    //Propiedades
    private _orientation: PhotoOrientacion

    public constructor(id: number, title: string, orientation: PhotoOrientacion) {
        super(id, title)
        this._orientation = orientation
    }

    get orientation() {
        return this._orientation
    }

    set orientation(o: PhotoOrientacion) {
        this._orientation = o
    }

    // Comportamiento
    public toSring() {
        return `[id: ${this._id}, title: ${this._title}, orientation: ${this._orientation}]`
    }
}

class Album extends Item{
    private _picture: Picture[]

    public constructor(id: number, title: string) {
        super(id, title)
        this._picture = []
    }

    public addPicture(picture: Picture) {
        this._picture.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1, 'Platzi session', PhotoOrientacion.Square)

album.addPicture(picture)

console.log('album', album)

// Accediendo a los miembros publicos 
console.log('picture.id', picture.id) // get id()

//picture.id = 100 // ! Error porque solo es de solo lectura
picture.title = 'Anothe title' 
album.title = 'Personal Activities' 

console.log('album', album)

//const item = new Item(1, 'Test title') // ! Error es una clase abstracta
//console.log('item', item)

// Probar el miembro estatico
console.log(Picture.photoOrientation.Landscape)