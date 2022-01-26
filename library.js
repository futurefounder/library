let myLibrary = [];

function Book(title, author, pages, read) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.read   = read
    this.info = function () {
        infoOut = title + " by " + author + "," + " " + pages + " pages, " + read;
        return infoOut;
    }
}

const TheHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, "not read yet")
console.log(TheHobbit.info())

function addBookToLibrary() {
    // do stuff here
  }