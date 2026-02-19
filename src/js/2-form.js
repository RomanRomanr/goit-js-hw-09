const form = document.querySelector('.feedback-form');

const formData = {
    email: "",
    message: ""
}
form.addEventListener('input', e => {
    const { name, value } = e.target;
    if (name in formData) {
        formData[name] = value.trim();
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
})

const savedData = localStorage.getItem('feedback-form-state');
if (savedData !== null) {
    const newSavedData = JSON.parse(savedData);
    form.elements.email.value = newSavedData.email
    form.elements.message.value = newSavedData.message;

    formData.email = newSavedData.email;
    formData.message = newSavedData.message;
}

form.addEventListener('submit', e => {
    e.preventDefault();
    if (formData.email === "" || formData.message ==="") {
        alert('Fill please all fields');
        return;
    }

    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = "";
    formData.message = "";
    form.reset();
    
})