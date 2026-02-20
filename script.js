const form = document.querySelector('#auth-form');
const nameInput= document.querySelector('#nameInput');
const email= document.querySelector('#email');
const errorDiv= document.querySelector('#error-message');
const message= document.querySelector('#mms'); 

// Проверка Name
nameInput.addEventListener('input', () => {
    if (nameInput.value.length <= 0)  {
        nameInput.style.borderColor = 'red';
    } else {
        Name.style.borderColor = 'green';
    }
});

// Проверка message
message.addEventListener('input', () => {
    if (message.value.length <= 0) {
        message.style.borderColor = 'red';
    } else {
        message.style.borderColor = 'green';
    }
});

// Проверка формы при submit
form.addEventListener('submit', (event) => {
    if (nameInput.value.length <= 0 || message.value.length <= 0) {
        event.preventDefault();
        errorDiv.textContent = 'Error. Form is required';
    } else {
        errorDiv.textContent = '';
        alert('Form submitted successfully');
    }
});