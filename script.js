const getButton = document.getElementById('button-login');
const getInputLogin = document.getElementById('user-email-phone');

getButton.addEventListener('click', () => alert(getInputLogin.value));
