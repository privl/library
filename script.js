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
    libDisplay.replaceChildren();

    for (let book of myLibrary) {
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
        readDiv.textContent = book.read ? 'Status: Read' : 'Status: Unread';
        readBtn.textContent = 'Change status';
        removeBtn.textContent = 'Remove';

        cardDiv.classList.add('card');
        nameDiv.classList.add('nameDisplay');
        authorDiv.classList.add('authorDisplay');
        pagesDiv.classList.add('pagesDisplay');
        readDiv.classList.add('readDisplay');
        readBtn.classList.add('readBtn');
        removeBtn.classList.add('removeBtn');

        readBtn.addEventListener('click', changeRead.bind(book));
        removeBtn.addEventListener('click', removeBook.bind(book));

        cardDiv.append(nameDiv, authorDiv, pagesDiv, readDiv, readBtn, removeBtn);
        libDisplay.append(cardDiv);
    }
}

function changeRead() {
    this.read = this.read ? false : true; 
    showLibrary();
}

function removeBook() {
    myLibrary.splice(myLibrary.indexOf(this), 1);
    showLibrary();
}