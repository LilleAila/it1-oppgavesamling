/* 
    Løsningsforslag fra Håvard. 
    Original: https://ildenh.github.io/projects/it1/vurderinger/2026-02-13/oppg2/
    Noen endringer er gjort fra originalen, spesielt gjelder dette 
    en litt enklere tilnærming til hvordan isOpen håndteres.
    
    Håvard sin elegante løsning: 
    bookEl.addEventListener("click", () => {
        let isClosed = bookEl.textContent == `${book.name}`;
        bookEl.innerHTML = isClosed ? showInfo(book) : `${book.name}`;
    });

    Tilpasset løsning, som gjør det samme, men som kanskje er litt enklere å forstå for noen:
    let isOpen = false;

    bookEl.addEventListener("click", function () {
        if (isOpen) {
        bookEl.textContent = book.name;
        isOpen = false;
        } else {
        bookEl.innerHTML = getBookDetailsHtml(book);
        isOpen = true;
        }
    });
*/
async function fetchBooks() {
    const response = await fetch("https://anapioficeandfire.com/api/books");
    const books = await response.json();
    return books;
}

function getBookDetailsHtml(book) {
  const releaseDate = book.released.split("T")[0];
  const authorsText = book.authors.join(", ");

  return `<b>${book.name}</b>
    <ul>
      <li>Released: <b>${releaseDate}</b></li>
      <li>Pages: <b>${book.numberOfPages}</b></li>
      <li>ISBN: <b>${book.isbn}</b></li>
      <li>Authors: <b>${authorsText}</b></li>
      <li>Publisher: <b>${book.publisher}</b></li>
      <li>Country: <b>${book.country}</b></li>
      <li>Media type: <b>${book.mediaType}</b></li>
      <li>Characters: <b>${book.characters.length}</b></li>
    </ul>`;
}

function createBookElement(book) {
  const bookEl = document.createElement("article");
  bookEl.className = "book";
  bookEl.textContent = book.name;

  let isOpen = false;

  bookEl.addEventListener("click", function () {
    if (isOpen) {
      bookEl.textContent = book.name;
      isOpen = false;
    } else {
      bookEl.innerHTML = getBookDetailsHtml(book);
      isOpen = true;
    }
  });

  return bookEl;
}

async function showBooks() {
  const books = await fetchBooks();

  for (const book of books) {
    const bookEl = createBookElement(book);
    document.body.appendChild(bookEl);
  }
}

showBooks();