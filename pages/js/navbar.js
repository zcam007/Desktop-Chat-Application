var firebase=require('../../firebase/firebase');
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      console.log("Loggedin");
      //document.getElementById('page2').innerHTML=firebase.auth().currentUser.email;
        var logoutBtn=document.getElementById('logoutBtn');
        if(logoutBtn!=null){
        logoutBtn.addEventListener('click',function(){
            firebase.auth().signOut()
  .then(function() {
    // Sign-out successful.
    document.location.href="../index.html";
  })
  .catch(function(error) {
    console.log(error);
    // An error happened
  });
        });

    } else {
      // No user is signed in.
      console.log("no signed in user");
    }
}
  });