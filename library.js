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

let showTitle = document.getElementById("showTitle").innerHTML = JSON.stringify(myLibrary[0].title);
let showAuthor = document.getElementById("showAuthor").innerHTML = JSON.stringify(myLibrary[0].author);
// let html = document.getElementById("showBooks").innerHTML = JSON.stringify(myLibrary[0].pages);
// let html = document.getElementById("showBooks").innerHTML = JSON.stringify(myLibrary[0].read);




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

    let showTitle = document.getElementById("showTitle").innerHTML = JSON.stringify(myLibrary);

    console.log(userInput)
  }

  function clickSwal() {
    swal({
        title: "Good job!",
        text: "You added a book! \n\n You can add another one, or close the window.",
        icon: "success",
        button: "Understood",
      });
  }
