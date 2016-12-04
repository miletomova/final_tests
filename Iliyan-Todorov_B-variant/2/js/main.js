(function () {

    var wrapper = document.getElementById('wrapper'),
        form = document.createElement('form'),
        nameLabel = document.createElement('p'),
        nameInput = document.createElement('input'),
        passwordLabel = document.createElement('p'),
        passwordInput = document.createElement('input'),
        telephoneLabel = document.createElement('p'),
        telephoneInput = document.createElement('input'),
        submitInput = document.createElement('input');


    nameLabel.innerHTML = 'Въведете име:';
    nameInput.type = 'text';
    form.appendChild(nameLabel);
    form.appendChild(nameInput);

    passwordLabel.innerHTML = 'Въвeдете парола:';
    passwordInput.type = 'password';
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);

    telephoneLabel.innerHTML = 'Въведете телефонния си номер';
    telephoneInput.type = 'tel';
    form.appendChild(telephoneLabel);
    form.appendChild(telephoneInput);

    submitInput.type = 'submit';
    submitInput.value = 'Изпрати';
    form.appendChild(submitInput);


    wrapper.appendChild(form);
} ());