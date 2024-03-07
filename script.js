const myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBookBtn = document.querySelector('#addBookBtn');
const libDisplay = document.querySelector('#libDisplay');
const modal = document.querySelector('#modal');
const newBookForm = document.querySelector('#newBookForm');
const nameInput = document.querySelector('#nameInput');
const authorInput = document.querySelector('#authorInput');
const pagesInput = document.querySelector('#pagesInput');
const readSelect = document.querySelector('#readSelect');
const cancelForm = document.querySelector('#cancelForm');
const submitForm = document.querySelector('#submitForm');

addBookBtn.addEventListener('click', () => {
    modal.showModal();
});

cancelForm.addEventListener('click', () => {
    modal.close();
});

submitForm.addEventListener('click', event => {
    event.preventDefault();
    modal.close();
});

submitForm.addEventListener('click', addBookToLibrary);


function addBookToLibrary() {
    const name = nameInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    let read = false;
    if (readSelect.checked) {
        read = true;
    }
    const book = new Book(name, author, pages, read);
    myLibrary.push(book);
    showLibrary();
    console.log(myLibrary);
}

function showLibrary() {
    for (let book in myLibrary) {
        const cardDiv = document.createElement('div');
        const nameDiv = document.createElement('div');
        const authorDiv = document.createElement('div');
        const pagesDiv = document.createElement('div');
        const readDiv = document.createElement('div');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');

        nameDiv.textContent = 'Name: ' + book.name;
        authorDiv.textContent = 'Author: ' + book.author;
        pagesDiv.textContent = 'Pages: ' + book.pages;
        if (book.read) {
            readDiv.textContent = 'Read';
        } else {
            readDiv.textContent = 'Unread';
        }
        readBtn.textContent = 'Change read status';
        removeBtn.textContent = 'Remove';

        cardDiv.append(nameDiv, authorDiv, pagesDiv, readDiv, readBtn, removeBtn);
        libDisplay.append(cardDiv);
    }
}
