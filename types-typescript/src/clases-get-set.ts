export { }

enum PhotoOrientacion {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    private _id: number
    private _title: string
    private _orientation: PhotoOrientacion

    public constructor(id: number, title: string, orientation: PhotoOrientacion) {
        this._id = id
        this._title = title
        this._orientation = orientation
    }

    get id() {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(title: string) {
        this._title = title
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

class Album {
    private _id: number
    private _title: string
    private _picture: Picture[]

    public constructor(id: number, title: string) {
        this._id = id
        this._title = title
        this._picture = []
    }

    get id() {
        return this._id
    }

    set id(id: number) {
        this._id = id
    }

    get title() {
        return this._title
    }

    set title(t: string) {
        this._title = t
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

picture.id = 100 // set id(100)
picture.title = 'Anothe title' 
album.title = 'Personal Activities' 

console.log('album', album)