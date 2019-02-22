// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var firebase=require('./firebase/firebase.js');

var config = {
    apiKey: "AIzaSyBlcIAPTFi5W__pFxufWyLXLin-nwg4J6U",
    authDomain: "desktop-chat-application.firebaseapp.com",
    databaseURL: "https://desktop-chat-application.firebaseio.com",
    projectId: "desktop-chat-application",
    storageBucket: "desktop-chat-application.appspot.com",
    messagingSenderId: "374510722132"
  };
  firebase.initializeApp(config);
  //require('./firebase/firebaseInfo.js');
  require('./dashboard');        

 // var ele=document.getElementById('heading');
  /*ele.addEventListener('click',function(){
      console.log("clicked1");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);

  });*/

  var signInbtn=document.getElementById('signinbtn');
  if(signInbtn!=null){
  signInbtn.addEventListener('click',function(){
      console.log("clicked");
    var emailField=document.getElementById('inputEmail').value;
    var passwordField=document.getElementById('inputPassword').value;
   // alert(emailField+" "+passwordField);
    firebase.auth().signInWithEmailAndPassword(emailField,passwordField).then(function()
    {
       // alert("Signed In");
       document.location.href="./pages/dashboard.html";
}).catch(function(error)
{
    alert("Wrong username/password");
        if(error!=null)
    {
        console.log(error.message);
        return;
    }
});

  });
}
  
