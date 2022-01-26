let myLibrary = [
    {
        title:  'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages:  295,
        read:   'not read yet' 
    }, 
    {
        title:  'Zen Tales',
        author: 'Alan Watts',
        pages:  199,
        read:   'Read' 
    }];

console.log(myLibrary)

function Book(title, author, pages, read) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.read   = read
}

function addBookToLibrary(book) {
    
    let bookTitle   = document.getElementById('bookTitle').value;
    let bookAuthor  = document.getElementById('bookAuthor').value;
    let bookPages   = document.getElementById('bookPages').value;
    let bookRead    = document.getElementById('bookRead').value;
    
    const userInput = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    const updatedLibrary = myLibrary.push(userInput)

    console.log(bookTitle, bookAuthor, bookPages, bookRead, myLibrary)
  }