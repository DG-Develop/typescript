export { }

enum PhotoOrientacion {
    Landscape,
    Portrait,
    Square,
    Panorama
}

class Picture {
    //Propiedades
    private id: number
    private title: string
    private orientation: PhotoOrientacion

    public constructor(id: number, title: string, orientation: PhotoOrientacion) {
        this.id = id
        this.title = title
        this.orientation = orientation
    }

    // Comportamiento
    public toSring() {
        return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`
    }
}

class Album{
    private id: number
    private title: string
    private picture: Picture[]

    public constructor(id: number, title: string){
        this.id = id
        this.title = title
        this.picture = []
    }

    public addPicture(picture: Picture){
        this.picture.push(picture)
    }
}

const album: Album = new Album(1, 'Personal Pictures')
const picture: Picture = new Picture(1,'Platzi session', PhotoOrientacion.Square)

album.addPicture(picture)

console.log('album', album)

// Accediendo a los miembros publicos 
// picture.id = 100 // ! private
// picture.title = 'Anothe title' // ! private
// album.title = 'Personal Activities' // ! private

console.log('album', album)