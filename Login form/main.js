const name = document.getElementById('name').value;
const password = document.getElementById('password').value;


document.getElementById('form').addEventListener('submit', (event) => {
    if(name.value === '' || password.value === ''){
        alert('You must have enter valid name and password');
        event.preventDefault();
    }
});