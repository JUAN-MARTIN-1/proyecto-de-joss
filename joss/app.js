document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('admin').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === '' || password === '') {
        errorMessage.textContent = 'Por favor, completa todos los campos.';
    } else {
        errorMessage.textContent = '';
        alert('Inicio de sesión exitoso');
        window.location.href = 'index.html'; 
    }
});
