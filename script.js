const myLibrary = [];
const body=document.querySelector("body");
class Book {
  constructor(title,author,pages,read,id){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.id=id;
    this.remove=document.createElement("button");
    this.remove.textContent="Remove";
    this.remove.addEventListener("click",(event)=>{
      const card=document.getElementById(this.id);
      body.removeChild(card);
    });
    this.changeRead=document.createElement("button");
    this.changeRead.addEventListener("click",(event)=>{
      this.read= (!this.read);
      const card=document.getElementById(this.id);
      body.removeChild(card);
      displayCard(this);
    });
  }
  // the constructor...
}

function addBookToLibrary(title,author,pages,read) {
  const id=crypto.randomUUID();
  myLibrary.push(new Book(title,author,pages,read,id));
  displayCard(myLibrary[myLibrary.length-1]);
  // take params, create a book then store it in the array
}
addBookToLibrary("Dune","Frank Herber",400,1);
function displayCard(book){
  const card=document.createElement("div");
  const title=document.createElement("p");
  title.textContent=book.title;
  const author=document.createElement("p");
  author.textContent=book.author;
  const pages=document.createElement("p");
  pages.textContent="No of pages: "+book.pages;
  const read=document.createElement("p");
  const remove=document.createElement("button");
  remove.textContent="Remove";
  card.id=book.id;
  if(book.read==false){
    read.textContent="Not read";
  }else{
    read.textContent="Read";
  }
  if(book.read==true){
    book.changeRead.textContent="Unread";
  }else{
    book.changeRead.textContent="Read";
  }
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.append(book.remove);
  card.append(book.changeRead);
  body.appendChild(card);
}
function displayAllBooks(){
  for(var i=0;i<myLibrary.length;i++){
    displayCard(myLibrary[i]);
  }
}
const button=document.querySelector("button");
const dialog=document.querySelector("dialog");
button.addEventListener("click",(event)=>{
  dialog.show();
});
const submit=document.querySelector("button[type='submit']");
submit.addEventListener("click",(event)=>{
  event.preventDefault();
  const title=document.getElementById("title");
  const author=document.getElementById("author");
  const noOfPages=document.getElementById("pageNumber");
  const read=document.getElementById("read");
  addBookToLibrary(title.value,author.value,noOfPages.value,read.checked);
  dialog.rese
  dialog.close();
});