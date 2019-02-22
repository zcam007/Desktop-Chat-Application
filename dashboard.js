var firebase=require('./firebase.js');

 firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("page2")
      document.getElementById('page2').innerHTML=firebase.auth().currentUser.email;
    } else {
      // No user is signed in.
    }
  });