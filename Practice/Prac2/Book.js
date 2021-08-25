class Book {
    constructor(
        name,
        author,
        genre,
        pages,
        color,
    ) {
        this.name = name,
        this.author = author,
        this.genre = genre,
        this.pages = pages,
        this.color = color
    };

    changeGenre(changedGenre){
        this.genre = changedGenre;
    }
    changeColor(changedColor){
        this.color = changedColor;
    }
}

export default Book;