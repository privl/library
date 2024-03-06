const addBookBtn = document.querySelector('#addBookBtn');
const modal = document.querySelector('#modal');
const cancelForm = document.querySelector('#cancelForm');

addBookBtn.addEventListener('click', () => {
    modal.showModal();
});

cancelForm.addEventListener('click', () => {
    modal.close();
})