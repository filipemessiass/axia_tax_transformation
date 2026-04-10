function obterCaminhoDashboard() {
    const estaNaPastaPortal = window.location.pathname.includes('/portal/');
    return estaNaPastaPortal
        ? '../dashboard-portal/dashboard-portal.html'
        : 'dashboard-portal/dashboard-portal.html';
}

function normalizarTexto(valor) {
    return valor
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim()
        .toLowerCase();
}

// Funcao para realizar o login
function fazerLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginValido = normalizarTexto(username) === normalizarTexto('Philippe Sá');

    if (loginValido && password === '123') {
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', 'Philippe Sá');
        localStorage.setItem('displayName', 'Philippe Sá');

        window.location.href = obterCaminhoDashboard();
    } else {
        document.getElementById('username').classList.add('error');
        document.getElementById('password').classList.add('error');

        setTimeout(() => {
            document.getElementById('username').classList.remove('error');
            document.getElementById('password').classList.remove('error');
        }, 3000);

        alert('Usuário ou senha incorretos!');
    }
}

window.onload = function() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';

    document.getElementById('username').addEventListener('input', function() {
        this.classList.remove('error');
    });

    document.getElementById('password').addEventListener('input', function() {
        this.classList.remove('error');
    });
};
