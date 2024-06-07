document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('comment-form');
    const commentList = document.getElementById('comment-list');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário para adicionar o comentário
        const comment = document.getElementById('comment').value.trim();

        if (comment) {
            const newComment = document.createElement('li');
            newComment.textContent = comment;
            commentList.appendChild(newComment);

            form.reset(); // Limpa o campo de texto após adicionar o comentário
        } else {
            alert('Por favor, insira um comentário.');
        }
    });
});
