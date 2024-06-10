// LANA B C DE ARAÚJO 
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const statusMessage = document.getElementById('status');
    const logoutButton = document.getElementById('logout-btn');

    const validUsername = 'user';
    const validPassword = '123';

    const checkLoginStatus = () => {
        const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn === 'true') {
            statusMessage.textContent = 'Você já está logado.';
            loginForm.style.display = 'none';
            logoutButton.style.display = 'block';
        }
    };

    const login = (event) => {
        event.preventDefault();
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        if (username === validUsername && password === validPassword) {
            localStorage.setItem('loggedIn', 'true');
            statusMessage.textContent = 'Login bem-sucedido!';
            loginForm.style.display = 'none';
            logoutButton.style.display = 'block';
        } else {
            statusMessage.textContent = 'Usuário ou senha incorretos.';
        }
    };

    const logout = () => {
        localStorage.removeItem('loggedIn');
        statusMessage.textContent = 'Você saiu da sessão.';
        loginForm.style.display = 'block';
        logoutButton.style.display = 'none';
    };

    loginForm.addEventListener('submit', login);
    logoutButton.addEventListener('click', logout);
    checkLoginStatus();
});
