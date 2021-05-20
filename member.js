// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBs0rq0Tr5BqSZVZIv_DNF9KGDiK2NzcKs",
    authDomain: "sas-getty-shopping.firebaseapp.com",
    databaseURL: "https://sas-getty-shopping.firebaseio.com",
    projectId: "sas-getty-shopping",
    storageBucket: "sas-getty-shopping.appspot.com",
    messagingSenderId: "1034454910547",
    appId: "1:1034454910547:web:40cd4add854e4372e9e8a6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function addUser() {
    var uid = document.getElementById("uid").value;
    var psw = document.getElementById("psw").value;
    localStorage.setItem("Username_is_great", uid);
    localStorage.setItem("Password", psw);


}

function Upload() {
    var uid1 = document.getElementById("uid").value;
    alert("Membership");
    document.getElementById("UserID").innerHTML = uid1;
}
function coolme() {
   
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var place = document.getElementById("place").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var pnum = document.getElementById("phone").value;
    var adrs = document.getElementById("address").value;
    localStorage.setItem("Name", first_name);
    localStorage.setItem("L name", last_name);
    firebase.database().ref("/").child(first_name + " " + last_name).update(
        {
            customer_age: age,
            customer_residency: place,
            Email_id: email,
            customer_comment: comment,
            phone_number: pnum
            

        }
    );
    //document.getElementById("remove").innerHTML = "";
    document.getElementById("addDiv").innerHTML = "<div class='container'><h1 class='text-success'>Thank You!</h1><br><small class='text-success'>Your form is submitted successfully!</small><img src='https://cdn-images-1.medium.com/max/1600/1*Tt1d7z553M0-vKfo0N9Krw.gif' height='70' width='90'><br><small class='text-danger'>if you have not filled the form correctly, you can refresh the page and fill it again</small></div><br><br><br><br><br><br><br><br><br>";

}


function validate() {
    var validate = true;
    var first_name = document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var age = document.getElementById("age").value;
    var place = document.getElementById("place").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    var pnum = document.getElementById("phone").value;
    var uid = document.getElementById("uid").value;
    var psw = document.getElementById("psw").value;
    var adrs = document.getElementById("address").value;
    if (first_name == "") {
        validate = false;
    }
    if (last_name == "") {
        validate = false;
    }
    if (age == "") {
        validate = false;
    }
    if (place == "") {
        validate = false;
    }
    if (email == "") {
        validate = false;
    }
    if (comment == "") {
        validate = false;
    }
    if (pnum == "") {
        validate = false;
    }
    if (uid == "") {
        validate = false;
    }
    if (psw == "") {
        validate = false;
    }

    return validate;
}
function submit_form() {
    if (validate() == true) {
        var first_name = document.getElementById("first_name").value;
        var last_name = document.getElementById("last_name").value;
        var age = document.getElementById("age").value;
        var place = document.getElementById("place").value;
        var email = document.getElementById("email").value;
        var comment = document.getElementById("comment").value;
        var pnum = document.getElementById("validationCustom08").value;
        var uid = document.getElementById("uid").value;
        var psw = document.getElementById("psw").value;
        var adrs = document.getElementById("address").value;
        firebase.database().ref("/").child(first_name + last_name).update(
            {
                customer_age: age,
                customer_residency: place,
                Email_id: email,
                customer_comment: comment,
                phone_number:adrs,
                user_id: uid,
                password: psw,
                address_pi: adrs
               


            }
        );
        //document.getElementById("remove").innerHTML = "";
        document.getElementById("addDiv").innerHTML = "<div class='container'><h1 class='text-success'>Thank You!</h1><br><small class='text-success'>Your form is submitted successfully!</small><img src='https://cdn-images-1.medium.com/max/1600/1*Tt1d7z553M0-vKfo0N9Krw.gif' height='70' width='90'><br><small class='text-danger'>if you have not filled the form correctly, you can refresh the page and fill it again</small></div>";
    }
}
var user = localStorage.getItem("Username_is_great");
var psw = localStorage.getItem("Password");
alert("Hello " + user);