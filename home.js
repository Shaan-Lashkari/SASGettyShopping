var firebaseConfig = {
    apiKey: "AIzaSyA4174VaS_IrlJMcXBYNPRb_gKdhkL0bq4",
    authDomain: "sasgettyshoppingquestions.firebaseapp.com",
    databaseURL: "https://sasgettyshoppingquestions.firebaseio.com",
    projectId: "sasgettyshoppingquestions",
    storageBucket: "sasgettyshoppingquestions.appspot.com",
    messagingSenderId: "964079212083",
    appId: "1:964079212083:web:d9e417690b8e5dcfdeb546"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
function check() {
    var user = localStorage.getItem("Username_is_great");
    var psw = localStorage.getItem("Password");
    alert("Hello " + user);
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
            //Start code

            //End code
        });
    });
}
getData();

function add_question() {

    var num = 0;
    num = num + 1;
    
    var key = "Question ";
    var user = localStorage.getItem("Username");
    var value_of_question = document.getElementById("question").value;
    alert(value_of_questions);
    firebase.database().ref("Question").child("Question").update({
        anyQuestions: value_of_question
    })
}
