import Book from "./Book.js";

const Book1 = new Book(
    "Looking for Alaska",
    "John Green",
    "Fiction",
    387,
    "Black"
)

const Book2 = new Book(
    "The fault in our Stars",
    "John Green",
    "Fiction",
    475,
    "Blue"
)

const Book3 = new Book(
    "Ninteen Eighty Four",
    "George Orwell",
    "Sci-Fi",
    456,
    "Orange"
)

const books = [Book1, Book2, Book3];

for(let i =0; i<books.length; i++){
    console.log(books[i]);
}