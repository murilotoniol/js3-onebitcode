function register(ev){
    const username = ev.currentTarget.parentNode.children.username.value
    const password = ev.currentTarget.parentNode.children.password.value
    const passwordConfirmation = ev.currentTarget.parentNode.children.passwordConfirmation.value

    console.log(username, password, passwordConfirmation)
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)