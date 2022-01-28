let myLibrary = [
    {
        title:  'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages:  295,
        read:   false 
    }];


let showTitle = document.getElementById("showTitle").innerHTML =   myLibrary[0].title;
let showAuthor = document.getElementById("showAuthor").innerHTML = myLibrary[0].author;
let showPages = document.getElementById("showPages").innerHTML =   myLibrary[0].pages;
let showRead = document.getElementById("showRead").innerHTML =     myLibrary[0].read;
    



function Book(title, author, pages, read) {
    this.title  = title
    this.author = author
    this.pages  = pages
    this.read   = read
}

function addBookToLibrary() {
    
    let title   = document.getElementById('bookTitle').value;
    let author  = document.getElementById('bookAuthor').value;
    let pages   = document.getElementById('bookPages').value;
    let read    = document.getElementById('bookRead').value;

    let userBook = new Book(title, author, pages, read);
    myLibrary.push(userBook);
   
    // let showTitle   = document.getElementById("showTitle").innerHTML    =   myLibrary[1].title;
    // let showAuthor  = document.getElementById("showAuthor").innerHTML   =   myLibrary[1].author;
    // let showPages   = document.getElementById("showPages").innerHTML    =   myLibrary[1].pages;
    // let showRead    = document.getElementById("showRead").innerHTML     =   myLibrary[1].read;

    // console.log(updatedLibrary);
    console.log(myLibrary);
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
