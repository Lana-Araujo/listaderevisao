// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', () => {
    const table = document.querySelector('.styled-table tbody');
    const addRowBtn = document.getElementById('add-row-btn');

    addRowBtn.addEventListener('click', () => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>Dados ${table.rows.length * 3 + 1}</td>
            <td>Dados ${table.rows.length * 3 + 2}</td>
            <td>Dados ${table.rows.length * 3 + 3}</td>
        `;
        table.appendChild(newRow);
    });
});
