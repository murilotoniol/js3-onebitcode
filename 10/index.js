function register(element) {
  const username = element.children.username.value;
  const password = element.children.password.value;
  const passwordConfirmation = element.children.passwordConfirmation.value;

  if (password === passwordConfirmation) {
    alert("Usuario" + username + " cadastrado");
  } else {
    alert("As senhas digitadas nao sao iguais!");
  }
}
