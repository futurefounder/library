let myLibrary = [
    {
        title:  'The Hobbit',
        author: 'J.R.R. Tolkien',
        pages:  295,
        read:   'No' 
    }];


// let showTitle = document.getElementById("showTitle").innerHTML =   myLibrary[0].title;
// let showAuthor = document.getElementById("showAuthor").innerHTML = myLibrary[0].author;
// let showPages = document.getElementById("showPages").innerHTML =   myLibrary[0].pages;
// let showRead = document.getElementById("showRead").innerHTML =     myLibrary[0].read;
    



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

    displayLibrary();

    console.log(myLibrary)
}

function displayLibrary() {

    for (i = 0; i < myLibrary.length; i++) {
        let li = document.createElement("li");
        let showTitle = document.createTextNode("Title:" + myLibrary[i].title + "\n");
        let showAuthor = document.createTextNode("Author:" + myLibrary[i].author + "\n");
        let showPages = document.createTextNode("Pages:" + myLibrary[i].pages + "\n");
        let showRead   = document.createTextNode("Read:" + myLibrary[i].read + "\n");


        li.appendChild(showTitle);
        li.appendChild(showAuthor);
        li.appendChild(showPages);
        li.appendChild(showRead);

        document.getElementById("myUl").appendChild(li);
      }

}

  function clickSwal() {
    swal({
        title: "Good job!",
        text: "You added a book! \n\n You can add another one, or close the window.",
        icon: "success",
        button: "👍🏽 Sounds good",
      });
  }
