const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    let messages = [];

    if (name === '' || name === null) {
        messages.push('Name is required');
    }

    if (password.length < 8) {
        messages.push('Password must be at least 8 characters long');
    }

    if (messages.length > 0) {
        e.preventDefault();
        errorElement.innerText = messages.join(' and ');
    }
});
