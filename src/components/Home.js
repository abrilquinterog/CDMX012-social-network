// SPA Principal

import { onNavigate } from '../main.js';
import { provider, loginGoogle } from '../lib/LoginFirebase.js';

export const Home = () => {
  const homeDiv = document.createElement('div');
  // Para darle una clase al div
  homeDiv.className = 'HomeDiv';
  const nodoH1 = document.createElement('h1');
  const nodoH2 = document.createElement('h2');
  const buttonCreateAccount = document.createElement('button');
  buttonCreateAccount.className = 'buttonHome';
  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonHome';
  const imageBack = document.createElement('img');
  imageBack.setAttribute('src', '../assets/montañafondo.png');
  imageBack.className = 'imageBack';

  const buttonLoginGoogle = document.createElement('img');
  buttonLoginGoogle.setAttribute = ('id', 'buttonGoogle');
  buttonLoginGoogle.classList.add('iconG');
  buttonLoginGoogle.src = '../assets/google.jpg';

  buttonLoginGoogle.addEventListener('click', () => {
    loginGoogle(provider);
  });

  buttonCreateAccount.textContent = 'Crear cuenta';
  buttonLogin.textContent = 'Iniciar sesión';

  buttonCreateAccount.addEventListener('click', () => {
    onNavigate('/register');
  });
  buttonLogin.addEventListener('click', () => {
    onNavigate('/login');
  });
  nodoH1.textContent = 'Triptime';
  nodoH2.textContent = 'Comparte experiencias auténticas de viaje';

  homeDiv.append(nodoH1, nodoH2, buttonCreateAccount, buttonLogin, buttonLoginGoogle, imageBack);
  return homeDiv;
};
