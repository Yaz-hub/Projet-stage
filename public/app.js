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
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
    } else {
      // User is signed out.
      // ...
    }
  });