
var pick = window.speechSynthesis;

speak_data = "Hi. This is your Assistant David  . Any Questions??? . Ask in the input below . A I will give u the answer ";

var arrQuestionHi = ["hi",  "hello"];
var arrQuestionFine = ["fine", "great"];
var arrQuestionRentBooks = ["rent books" , "rent a book"];
var arrShlokNegi = ['Shlok Negi', 'shlok negi']

var mutterThis = new SpeechSynthesisUtterance(speak_data);

pick.speak(mutterThis);

function open_new_window() {
    var myWindow = window.open("/Rent/permission.html", "Permission Window", "width=700,height=1000");
    
}
function remove_function() {
    
    document.getElementById("rem").innerHTML = "";
    setTimeout(function () {
        document.getElementById("add").style.display = "block";
    }, 2000);
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


function send_function_test() {
    var questionInput = document.getElementById("question").value;   
    
    
    document.getElementById("hi").innerHTML += "<div class='message_hum'>" + questionInput + "</div>";
    setTimeout(function () {
        if (arrQuestionHi.includes(questionInput.toLowerCase())) {
           


            var synth = window.speechSynthesis;

            speak_data = "Hi. How are you doing?", "Hello!";

            document.getElementById("hi").innerHTML += "<div class='message_ai'>Hi . How are you doing???</div>";

            var utterThis = new SpeechSynthesisUtterance(speak_data);

            synth.speak(utterThis);


        }
        else if (arrQuestionFine.includes(questionInput.toLowerCase())) {





            var synth = window.speechSynthesis;

            speak_data = "Great!!! You're a genius!?!?! Looks like you need help? Frequently Asked Questions:........How do we rent books? ";

            document.getElementById("hi").innerHTML += "<div class='message_ai'>Great!!! You're a genius!?!?!</div>";
            setTimeout(function () {
                document.getElementById("hi").innerHTML += "<div class='message_ai'>Looks like you need help?</div>";
            },3000
            );
            
            setTimeout(function () {
                document.getElementById("hi").innerHTML += "<div class='message_ai'>Frequently Asked Questions:</div>";
            }, 5000
            );

            setTimeout(function () {
                document.getElementById("hi").innerHTML += "<div class='message_ai'>How do we rent books?</div>";
            }, 7000);

            
            

            var utterThis = new SpeechSynthesisUtterance(speak_data);

            synth.speak(utterThis);


        }
        else if (arrQuestionRentBooks.includes(questionInput.toLowerCase())) {





            var synth = window.speechSynthesis;

            speak_data = "Go in the books section and search : Geronimo Stilton , Roald Dhaal , ecsectra!!! Then Then click the book after searching . You will find a popup . In that , just see the details and rent the book . ";

            document.getElementById("hi").innerHTML += "<div class='message_ai'>Go in the books section and search : Geronimo Stilton , Roald Dhal , etc.  Then click the book after searching . You will find a popup . In that , just see the details and rent the book . </div>";

            var utterThis = new SpeechSynthesisUtterance(speak_data);

            synth.speak(utterThis);


        }
        else if (questionInput.toLowerCase().includes("ceo")) {
            var synth = window.speechSynthesis;

            speak_data = "Our CEO is Shaan Lashkari from india. He is a very helpful person .  He always helps us to improve our Company : sas jetty Shopping . He struggled alot during march 2020 and august 2020 . At first his friend arit Rastogi Joined the Company . but arit betrayed us . Shaan was left alone . Shaan pushed hard on sas jetty Shopping but he coudnt do anything . At last Shaan pushed sas jetty Shopping with a rocket speed! He progressed alot . Now his betraying friend is just a ant infront of Shaan Lashkari . After all , Shaan made me . Assistant David .  I am his favourite Assistant . He made and programmed me to talk with him . But now i can talk with all . Thank you Shaan Lashkari ";

            document.getElementById("hi").innerHTML += "<div class='message_ai'>Our CEO is Shaan Lashkari from india. He is a very helpful person .  He always helps us to improve our Company : SAS Getty Shopping . He struggled alot during march 2020 and august 2020 . At first his friend Aarit Rastogi Joined the Company . but he betrayed us . He was left alone . he pushed hard on SAS getty Shopping but he coudn't do anything . At last he pushed SAS Getty Shopping with a rocket speed! He progressed alot . Now his betraying friend is just a ant infront of Shaan Lashkari . After all , He made me . Assistant David .  I am his favourite Assistant . He made and programmed me to talk with him . But now i can talk with all . Thank you Shaan Lashkari</div>";

            var utterThis = new SpeechSynthesisUtterance(speak_data);

            synth.speak(utterThis);
        }
        else if (arrShlokNegi.includes(questionInput.toLowerCase())) {





            var synth = window.speechSynthesis;

            speak_data = "Shlok Negi is the business partner in the company es a es Getty Shopping";

            document.getElementById("hi").innerHTML += "<div class='message_ai'>Shlok Negi is the business partner in the company es a es Getty Shopping</div>";

            var utterThis = new SpeechSynthesisUtterance(speak_data);

            synth.speak(utterThis);


        }
        else  {





            var synth = window.speechSynthesis;

            speak_data = "Sorry ! I didn't get that . Can you repeat? please ask or right a meaningful question!!!:(";

            document.getElementById("hi").innerHTML += "<div class='message_ai'>Sorry ! I didn't get that . Can you repeat?</div>";

            var utterThis = new SpeechSynthesisUtterance(speak_data);

            synth.speak(utterThis);


        }
    }, 1000);

    document.getElementById("question").value = "";
}