const getButton = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');
const getInputs = document.getElementsByTagName('input');
const buttonCadastro = document.querySelector('#facebook-register');
const getMensage = document.querySelector('#alert-mensage');
const getOthers = document.querySelector('.buttons-radius');
const getPersona = document.querySelector('#others');
const getSp = document.querySelector('.align-ipt');
let count = 0;
//
getButton.addEventListener('click', () => alert(getInputLogin.value));

buttonCadastro.addEventListener('click', (e) => {
  for (let index = 0; index < getInputs.length; index += 1) {
    if (getInputs[index].value === '') {
      count += 1;
    } if (count > 2) {
      getMensage.innerHTML = 'Campos inválidos';
    }
  }
  e.preventDefault();
});

getOthers.addEventListener('click', (evt) => {
  const getTarget = evt.target;
  if (getTarget === getPersona) {
    const createInpt = document.createElement('input');
    createInpt.setAttribute('type', 'text');
    createInpt.setAttribute('name', 'gender-custom');
    createInpt.setAttribute('placeholder', 'gênero(opcional)');
    getSp.appendChild(createInpt);
  }
});
