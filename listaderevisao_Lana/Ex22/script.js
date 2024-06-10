// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('checkout-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zip = document.getElementById('zip').value;
        const cardName = document.getElementById('card-name').value;
        const cardNumber = document.getElementById('card-number').value;
        const cardExpiry = document.getElementById('card-expiry').value;
        const cardCvc = document.getElementById('card-cvc').value;

        if (!name || !email || !address || !city || !state || !zip || !cardName || !cardNumber || !cardExpiry || !cardCvc) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Por favor, insira um endereço de email válido.');
            return;
        }

        if (!validateCardNumber(cardNumber)) {
            alert('Por favor, insira um número de cartão válido.');
            return;
        }

        if (!validateCardExpiry(cardExpiry)) {
            alert('Por favor, insira uma data de expiração válida.');
            return;
        }

        if (!validateCardCvc(cardCvc)) {
            alert('Por favor, insira um CVC válido.');
            return;
        }

        alert('Compra finalizada com sucesso!');
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    function validateCardNumber(cardNumber) {
        const re = /^[0-9]{16}$/;
        return re.test(cardNumber);
    }

    function validateCardExpiry(cardExpiry) {
        const re = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
        return re.test(cardExpiry);
    }

    function validateCardCvc(cardCvc) {
        const re = /^[0-9]{3,4}$/;
        return re.test(cardCvc);
    }
});
