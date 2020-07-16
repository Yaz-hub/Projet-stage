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
console.log('hello')
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(result) {
        // result.user.tenantId should be ‘TENANT_PROJECT_ID’.
        console.log('welcome');
        firebase.database().ref('users').limitToFirst(1).orderByChild('email').equalTo(email).on('value', function(snapshot) {
            snapshot.forEach(function(item) {
              const user = item.val();
              const type =  `${user.type}`;
              console.log(type);
              if (type=="student") {
                window.location.href = 'public/student/history.html';
              }
              else if (type=="prof"){
                
               window.location.href = 'public/prof/prof.html';
              }
              else {
              window.location.href = 'public/Admin/summary.html';

              }
              console.log(user);
              console.log( `${user.type} `);
            });
        })

//     
//      window.location.href = '/public/Admin/summary.html';
      }).catch(function(error) {
        console.log(error);
      });
}