// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', () => {
    filterSelection('all');
});

function filterSelection(category) {
    const items = document.getElementsByClassName('gallery-item');
    if (category == 'all') category = '';
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = items[i].className.indexOf(category) > -1 ? 'block' : 'none';
    }

    const buttons = document.getElementsByClassName('btn');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = buttons[i].className.replace(' active', '');
    }
    document.querySelector(`[onclick="filterSelection('${category}')"]`).className += ' active';
}
