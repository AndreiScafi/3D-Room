const button = document.querySelector('.btn');
const table = document.querySelector('.table');

button.addEventListener('click', () => {
    table.classList.toggle('change');
});