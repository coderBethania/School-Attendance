import firebase from 'firebase'
    var firebaseConfig = {
    apiKey: "AIzaSyBbFgcN0sTLWPaZHXFjMyIBF3SU2nm1QUc",
    authDomain: "school-c204b.firebaseapp.com",
    databaseURL: "https://school-c204b-default-rtdb.firebaseio.com",
    projectId: "school-c204b",
    storageBucket: "school-c204b.appspot.com",
    messagingSenderId: "937373514048",
    appId: "1:937373514048:web:c92a7e185f78f3fcffa2a5"
  };
  // Initialize Firebase
  if(!firebase.apps.length)
{
firebase.initializeApp(firebaseConfig)
}


  export default firebase.database()

  