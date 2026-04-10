// Função para realizar o login
function fazerLogin() {
    // Obtém os valores dos campos de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verifica se o usuário e a senha estão corretos
    if (username === 'Admin' && password === '123') {
        // Armazena os dados do usuário no localStorage
        localStorage.setItem('loggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('displayName', 'Admin');
        
        // Redireciona para a página do dashboard
        window.location.href = '../dashboard-portal/dashboard-portal.html';
    } else {
        // Adiciona a classe de erro aos campos de usuário e senha
        document.getElementById('username').classList.add('error');
        document.getElementById('password').classList.add('error');
        
        // Remove a classe de erro após 3 segundos
        setTimeout(() => {
            document.getElementById('username').classList.remove('error');
            document.getElementById('password').classList.remove('error');
        }, 3000);
        
        // Exibe um alerta de erro
        alert('Usuário ou senha incorretos!');
    }
}

// Função executada quando a página carrega
window.onload = function() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    
    // Adiciona os event listeners para remover a classe de erro
    document.getElementById('username').addEventListener('input', function() {
        this.classList.remove('error');
    });
    
    document.getElementById('password').addEventListener('input', function() {
        this.classList.remove('error');
    });
} 