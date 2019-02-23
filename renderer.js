// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var firebase=require('./firebase/firebase.js');
require('./assets/js/core/jquery.min.js')
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
require('./pages/js/navbar');
 // var ele=document.getElementById('heading');
  /*ele.addEventListener('click',function(){
      console.log("clicked1");
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider);

  });*/
  

  var signInbtn=document.getElementById('signinbtn');
  if(signInbtn!=null){

  signInbtn.addEventListener('click',function(){
      console.log("clicked");/*
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
*/
//var url= "https://github.com/login/oauth/authorize?scope=user:email&client_id=cf7bb423bc0b39db4a65";


//xhr.open("POST", url, true);
//xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
//xhr.send(someStuff);
//document.location.href='https://github.com/login/oauth/authorize?scope=user:email&client_id=cf7bb423bc0b39db4a65';

//window.open('https://github.com/login/oauth/authorize?scope=user:email&client_id=e54d559c8b093903d865&state=hjbjhg', 'Github', 'nodeIntegration=no')
function createBrowserWindow() {
    const remote = require('electron').remote;
    const BrowserWindow = remote.BrowserWindow;
    const win = new BrowserWindow({
      height: 500,
      width: 500,
      webPreferences: {
        nodeIntegration: true
      }
    });
   // win.setParentWindow(null);

    win.loadURL('https://github.com/login/oauth/authorize?scope=user:email&client_id=cf7bb423bc0b39db4a65');
   // console.log(win.webContents.getURL());
    //console.log(remote.getCurrentWindow().webContents.getURL());
   // win.loadUrl('https://github.com/login/oauth/authorize?scope=user:email&client_id=e54d559c8b093903d865');
win.webContents.on('did-finish-load', ()=>{
    var realCode="";

    var currentTime = new Date().getTime();

   while (currentTime + 2000 >= new Date().getTime()) {
   }
    let code = 'var authButton = document.getElementById("hello").innerHTML;';
    win.webContents.executeJavaScript(code);
   // console.log(code);
    let req = new XMLHttpRequest();
    req.onreadystatechange = () => {
        if (req.readyState == XMLHttpRequest.DONE) {
          console.log(req.responseText);
          var codefromJSON=JSON.parse(req.responseText);
          console.log(codefromJSON["key"]);
          realCode=codefromJSON;
          //document.location.href='pages/dashboard.html';
        }
      };
      
      req.open("GET", "https://api.jsonbin.io/b/5c709a1f91e4475ca8475115/latest", true);
      //req.setRequestHeader("secret-key", "<SECRET_KEY>");
      req.send();

      var xhr = new XMLHttpRequest();
      console.log("code"+realCode);
  
  xhr.open("POST", "https://github.com/login/oauth/access_token", true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
  var links="client_id=cf7bb423bc0b39db4a65&client_secret=c66381ee9b96dc58a11b7725a9de19fb642f294b&code="+realCode;
  xhr.send(links);
  xhr.onload = function() {
    console.log("HELLO");
    console.log(this.responseText);
   // var data = JSON.parse(this.responseText);
    //console.log(data);
  }
});
}
  createBrowserWindow();
  
//xhr.addEventListener("load", reqListener);
//xhr.open('GET', yourUrl, true);
//xhr.send();


/*const urlParams = new URLSearchParams(window.location.search);
const token = urlParams.get('code');
  var credential = firebase.auth.GithubAuthProvider.credential(token);
  firebase.auth().signInAndRetrieveDataWithCredential(credential).then(function()
  {
    document.location.href="./pages/dashboard.html";
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });*/
  });
}
  