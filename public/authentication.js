const firebaseConfig = {
  apiKey: "AIzaSyBnKxSYPQpqD_rKm8B2LNnYxPjYwH1gZeg",
  authDomain: "stage-91d46.firebaseapp.com",
  databaseURL: "https://stage-91d46.firebaseio.com",
  projectId: "stage-91d46",
  storageBucket: "stage-91d46.appspot.com",
  messagingSenderId: "958570288643",
  appId: "1:958570288643:web:cdf80af1bffdb9f0d8e036",
  measurementId: "G-2LXJFDCEY5"
};

firebase.initializeApp(firebaseConfig);

$('#loginForm').on('submit', emailPasswordLogin);

function emailPasswordLogin(event) {
    event.preventDefault();

    const email = $('#emailField').val();
    const password = $('#passwordField').val();
const db = firebase.collections;
const user = db.collection('users').where('email', '==', email );
console.log(user);

    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
      if (error) {
        console.log(error);
      } else {
        console.log('welcome');
        firebase.database().ref('users').orderByChild('email').equalTo(email)
          .once('value')
          .then(snapshot => {
            const records = snapshot.val();
            console.log(records);
          })
          .catch(error => console.log(error));

//      window.location.href = '/public/student/summary.html';
//      window.location.href = '/public/prof/summary.html';
//      window.location.href = '/public/Admin/summary.html';
    }
      
    });
}