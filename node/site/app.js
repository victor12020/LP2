const firebaseConfig = {
  apiKey: "AIzaSyBR5AyuRTqnvd8zu9qTu0QAEryaF_aksFE",
  authDomain: "projeto2mibteste-cb978.firebaseapp.com",
  projectId: "projeto2mibteste-cb978",
  storageBucket: "projeto2mibteste-cb978.appspot.com",
  messagingSenderId: "527595210917",
  appId: "1:527595210917:web:6a899e6efb7fa11ff3e54c",
};

firebase.initializeApp(firebaseConfig);

function logout() {
  firebase.auth().signOut().then(() => {
      alert("Usuario Deslogado");
    });
}

/*
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', () => {
    const email = emailField.value;
    const password = passwordField.value;
    
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    const user = userCredential.user;
    console.log('Usuário logado:', user);
    })
    .catch((error) => {
    const errorMessage = error.message;
    console.error('Erro de autenticação:', errorMessage);
    });
});
*/
