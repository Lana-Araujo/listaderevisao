// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para validação
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Formulário enviado com sucesso!');
            form.reset(); 
        }
    });
});
