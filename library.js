let myLibrary = [
    {
        title:  'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages:  295,
        read:   false 
    }, 
    {
        title:  'Zen Tales',
        author: 'Alan Watts',
        pages:  199,
        read:  true 
    }];

    for (i = 0 ; i < myLibrary.length; i++) { 

let showTitle = document.getElementById("showTitle").innerHTML =    JSON.stringify(myLibrary[i].title);
let showAuthor = document.getElementById("showAuthor").innerHTML =  JSON.stringify(myLibrary[i].author);
let showPages = document.getElementById("showPages").innerHTML =    JSON.stringify(myLibrary[i].pages);
let showRead = document.getElementById("showRead").innerHTML =      JSON.stringify(myLibrary[i].read);
    }

let bookTitle   = document.getElementById('bookTitle').value;
let bookAuthor  = document.getElementById('bookAuthor').value;
let bookPages   = document.getElementById('bookPages').value;
let bookRead    = document.getElementById('bookRead').value;

function Book(title, author, pages, read) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.read   = read
}

function addBookToLibrary() {
    
    let userInput = new Book(bookTitle, bookAuthor, bookPages, bookRead);
    let updatedLibrary = myLibrary.push(userInput)

    for (i =0 ; i < myLibrary.length; i++) { 
   
    let showTitle   = document.getElementById("showTitle").innerHTML    =   JSON.stringify(myLibrary[i].title);
    let showAuthor  = document.getElementById("showAuthor").innerHTML   =   JSON.stringify(myLibrary[i].author);
    let showPages   = document.getElementById("showPages").innerHTML    =   JSON.stringify(myLibrary[i].pages);
    let showRead    = document.getElementById("showRead").innerHTML     =   JSON.stringify(myLibrary[i].read);
}
    console.log(myLibrary)
  }
  console.log(myLibrary)

  function clickSwal() {
    swal({
        title: "Good job!",
        text: "You added a book! \n\n You can add another one, or close the window.",
        icon: "success",
        button: "Understood",
      });
  }
