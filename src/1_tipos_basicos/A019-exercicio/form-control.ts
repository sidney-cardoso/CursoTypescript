import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const password2 = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();
    hideErrorMessages(form);

    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkPasswords(password, password2);
    if (shouldSendForm(form)) alert('Cadastro realizado com sucesso!');
});

const checkForEmptyFields = (...inputs: HTMLInputElement[]): void => {
    inputs.forEach((input) => {
        if (input.value === '') showErrorMessage(input, 'Este campo deve ser preenchido!');
    });
};

const checkEmail = (input: HTMLInputElement): void => {
    if (!isEmail(input.value)) showErrorMessage(input, 'E-mail inválido');
};

const checkPasswords = (password: HTMLInputElement, password2: HTMLInputElement): void => {
    if (!password.value) {
        showErrorMessage(password, 'Este campo deve ser preenchido!');
        return;
    }
    if (!password2.value) {
        showErrorMessage(password2, 'Este campo deve ser preenchido!');
        return;
    }

    if (password.value !== password2.value) {
        showErrorMessage(password, 'Senhas não coincidem');
        showErrorMessage(password2, 'Senhas não coincidem');
    }
};

const hideErrorMessages = (form: HTMLFormElement): void => {
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGE));
};

const showErrorMessage = (input: HTMLInputElement, message: string): void => {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement;

    errorMessage.innerText = message;
    formFields.classList.add(SHOW_ERROR_MESSAGE);
};

const shouldSendForm = (form: HTMLFormElement): boolean => {
    let send = true;
    form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(() => (send = false));
    return send;
};
