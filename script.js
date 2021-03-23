const getButton = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');
const getInputs = document.getElementsByTagName('input');
const buttonCadastro = document.querySelector('#facebook-register');
const getMensage = document.querySelector('#alert-mensage');

getButton.addEventListener('click', () => alert(getInputLogin.value));

buttonCadastro.addEventListener('click', (e) => {
  for (let index = 0; index < getInputs.length; index += 1) {
    if (getInputs[index].value === '') {
      getMensage.innerHTML = 'Campos inválidos';
    }
  }
  e.preventDefault();
});
