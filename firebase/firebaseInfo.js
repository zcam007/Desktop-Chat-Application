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