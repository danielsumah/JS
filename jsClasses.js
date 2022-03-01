function makeBook (){
    class Book {
        constructor(title){
            this._title = title;
        }
    
        get bookTitle(){
            return this._title;
        }
    
        set setTitle(newTitle){
            this._title = newTitle;
        }
    }

    return Book;
}

const Book = makeBook();
const myBook = new Book('Things fall apart');
let book = myBook.bookTitle;
console.log(book)
myBook.setTitle = 'Part 2'
book = myBook.bookTitle;
console.log(book)