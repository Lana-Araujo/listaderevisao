// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário

        // Exibe o alerta de sucesso
        Swal.fire({
            title: 'Envio com sucesso!',
            text: 'Seu formulário foi enviado.',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        // Limpa o formulário após o envio
        form.reset();
    });
});
