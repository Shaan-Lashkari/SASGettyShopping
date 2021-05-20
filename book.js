var ShaanBooksClass = {
    version: '1.0.26',
    loaded: false,   // true when webcam movie finishes loading
    live: false,     // true when webcam is initialized and ready to snap        

    MyCamera: function () {
        // initialize, check for getUserMedia support
        var self = this;
        var num = 10;
        var num2 = 20;
        alert(num * num2);
        
    }
}

window.addEventListener("keydown", myKeydown);
function myKeydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == 13) {
        var questionInput = document.getElementById("question").value;
        if (questionInput != null && questionInput != "") {
            send_function_test();
        }

    }
    else {

    }
}


var user = localStorage.getItem("uid");
var psw = localStorage.getItem("psw");

function check() {
    document.getElementById("output_geronimo_stilton").innerHTML = "";
    alert("Hello " + user);
}
function order() {
    myself = this;
    alert(myself)
    if (myself == "roalddhalelev"){
        alert("Successful")
    }
}
function true_or_false() {
    {
        var Roald_dhal = document.getElementById("Roald_dhal").value;
        var Geronimo_stilton = document.getElementById("Geronimo_stilton").value;
        var Elon_musk = document.getElementById("Elon_musk").value;
        var Dog_man = document.getElementById("Dog_man").value;
        var Tom_gates = document.getElementById("Tom_gates").value;
        var rk_narayan = document.getElementById("rk_narayan").value;
        var Adventure_mooli = document.getElementById("Adventure_mooli").value;
        var dk = document.getElementById("dk").value;
    }
    if (Roald_dhal == true) {
        Geronimo_stilton = false;
        Elon_musk = false;
        Dog_man = false;
        Tom_gates = false;
        rk_narayan = false;
        Adventure_mooli = false;
        dk = false;
    }
    if (Geronimo_stilton == true) {
        Roald_dhal = false;
        Elon_musk = false;
        Dog_man = false;
        Tom_gates = false;
        rk_narayan = false;
        Adventure_mooli = false;
        dk = false;
    }
    if (Elon_musk == true) {
        Roald_dhal = false;
        Geronimo_stilton = false;
        Dog_man = false;
        Tom_gates = false;
        rk_narayan = false;
        Adventure_mooli = false;
        dk = false;
    }
    if (Dog_man == true) {
        Roald_dhal = false;
        Elon_musk = false;
        Geronimo_stilton = false;
        Tom_gates = false;
        rk_narayan = false;
        Adventure_mooli = false;
        dk = false;
    }
    if (Tom_gates == true) {
        Roald_dhal = false;
        Elon_musk = false;
        Dog_man = false;
        Geronimo_stilton = false;
        rk_narayan = false;
        Adventure_mooli = false;
        dk = false;
    }
    if (rk_narayan == true) {
        Roald_dhal = false;
        Elon_musk = false;
        Dog_man = false;
        Tom_gates = false;
        Geronimo_stilton = false;
        Adventure_mooli = false;
        dk = false;
    }
    if (Adventure_mooli == true) {
        Roald_dhal = false;
        Elon_musk = false;
        Dog_man = false;
        Tom_gates = false;
        rk_narayan = false;
        Geronimo_stilton = false;
        dk = false;
    }
    if (dk == true) {
        Roald_dhal = false;
        Elon_musk = false;
        Dog_man = false;
        Tom_gates = false;
        rk_narayan = false;
        Adventure_mooli = false;
        Gero = false;
    }
}
function search() {

    var search_text = document.getElementById("search").value;
    if (search_text == "Geronimo Stilton" || search_text == "geronimo stilton" || search_text == "geronimostilton" || search_text == "GeronimoStilton" || search_text == "geronimo" || search_text == "Geronimo" || search_text == "Stilton" || search_text == "stilton") {

        document.getElementById("output_geronimo_stilton").innerHTML = " <a href='product_page.html' onclick='' ><div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link' style='font-family:cursive;display:block'><img src='BachchaImage10.webp' height='300px;'><br><kas>60% off</kas> | Geronimo Stilton | Wedding Crasher </div></a><a href='product_page.html' onclick='localStorage.setItem('Roald Dhal - Matilda' ,'Roald Dhal - Matilda');' > <div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link' style='font-family:cursive;display:block'><img src='BachchaImage11.webp' height='300px;'><br><kas>60% off</kas> | Geronimo Stilton | The Flight of the Red Bandit </div></a><a href='product_page.html' onclick='localStorage.setItem('Roald Dhal - Matilda' ,'Roald Dhal - Matilda');' > <div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link' style='font-family:cursive;display:block'><img src='BachchaImage13.webp' height='300px;'><br><kas>60% off</kas> | Geronimo Stilton | SPACE MICE | Pirate Space Cat Attack </div></a><a href='product_page.html' onclick='localStorage.setItem('Roald Dhal - Matilda' ,'Roald Dhal - Matilda');' > <div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link' style='font-family:cursive;display:block'><img src='BachchaImage12.webp' height='300px;'><br><kas>60% off</kas> | Geronimo Stilton | Bollywood Burglary </div></a>";
    }
    else if (search_text == "Roald Dhal" || search_text == "Roald" || search_text == "roald" || search_text == "dhal" || search_text == "Dhal" || search_text == "RoaldDhal" || search_text == "roalddhal") {


        document.getElementById("output_geronimo_stilton").innerHTML = "<div class='product_item col-lg-3 col-md-3 col-sm-6 col-xs-12'><img src'BachchaSaveImage14.jpg'></div><div class='product_item col-lg-3 col-md-3 col-sm-6 col-xs-12'><img src'BachchaSaveImage14.jpg'></div><div class='product_item col-lg-3 col-md-3 col-sm-6 col-xs-12'><img src'BachchaSaveImage14.jpg'></div><div class='product_item col-lg-3 col-md-3 col-sm-6 col-xs-6'><img src'BachchaSaveImage14.jpg'></div>";
    }
    else if (search_text == "Dog Man" || search_text == "dog man" || search_text == "Dog" || search_text == "dog" || search_text == "Man" || search_text == "man" || search_text == "Dgg Man") {
        document.getElementById("output_geronimo_stilton").innerHTML = "<a href='product_page.html'><div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link'><img src=''></div></a>";
    }
    else {
        document.getElementById("output_geronimo_stilton").innerHTML = "<small class='text-danger' style='font-family:cursive;'>Sorry . We didn't find any thing matching this ☹️</small>";

        var synth = window.speechSynthesis;                 

        synth.speak(new SpeechSynthesisUtterance("Sorry . We didn't find any thing matching this"));
    }


    

}
