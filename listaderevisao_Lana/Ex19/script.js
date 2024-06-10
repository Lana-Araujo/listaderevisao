// LANA B C DE ARAÚJO
document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('file-input');
    const previewContainer = document.getElementById('preview');

    fileInput.addEventListener('change', () => {
        previewContainer.innerHTML = '';
        const files = fileInput.files;

        Array.from(files).forEach(file => {
            const fileReader = new FileReader();

            fileReader.addEventListener('load', event => {
                const previewItem = document.createElement('div');
                previewItem.classList.add('preview-item');

                const img = document.createElement('img');
                img.src = event.target.result;
                img.alt = file.name;

                const fileName = document.createElement('p');
                fileName.textContent = file.name;

                previewItem.appendChild(img);
                previewItem.appendChild(fileName);
                previewContainer.appendChild(previewItem);
            });

            fileReader.readAsDataURL(file);
        });
    });

    const form = document.getElementById('upload-form');
    form.addEventListener('submit', event => {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});
