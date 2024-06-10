// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', (event) => {
    const listItems = document.querySelectorAll('.interactive-list li');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            listItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');
        });
    });
});
