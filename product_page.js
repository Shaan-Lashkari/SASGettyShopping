function search() {

    var search_text = document.getElementById("search").value;
    if (search_text == "Geronimo Stilton" || search_text == "geronimo stilton" || search_text == "geronimostilton" || search_text == "GeronimoStilton" || search_text == "geronimo" || search_text == "Geronimo" || search_text == "Stilton" || search_text == "stilton") {

        document.getElementById("output_geronimo_stilton").innerHTML = "<h1>Geronimo Stilton</h1>";
    }
    else if (search_text == "Roald Dhal" || search_text == "Roald" || search_text == "roald" || search_text == "dhal" || search_text == "Dhal" || search_text == "RoaldDhal" || search_text == "roalddhal") {

        document.getElementById("output_geronimo_stilton").innerHTML = "<a href='product_page.html'><div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link' style='font-family:cursive;'><img src='BachchaSaveImage6.jpg' height='300px;'><br><kas>60% off</kas> | Roald Dhal | Book</div></a><a><div class='product col-lg-3 col-md-3 col-sm-5 col-xs-12 link'><img src='BachchaSaveImage5.jpg' height='300px;'><br>50% off | Roald Dhal | Book</div></a><a><div class='product col-lg-3 col-md-3 col-sm-5 col-xs-12 link'><img src='BachchaImage7.webp' height='300px;'><br>50% off | Roald Dhal | Book</div></a><a><div class='product col-lg-3 col-md-3 col-sm-5 col-xs-12 link'><img src='BachchaSaveImage14.jpg' height='300px;'><br>50% off | Roald Dhal | Book</div></a><a class='link'><div class='product col-lg-3 col-md-3 col-sm-3 col-xs-12'><img src='BachchaSaveImage15.jpg' height='300px;'><br>50% off | Roald Dhal | Book</div></a>";
        localStorage.setItem("Roald Dhal-Matilda", "Roald Dhal-Matilda");
    }
    else if (search_text == "Dog Man" || search_text == "dog man" || search_text == "Dog" || search_text == "dog" || search_text == "Man" || search_text == "man" || search_text == "Dgg Man") {
        document.getElementById("output_geronimo_stilton").innerHTML = "<a href='product_page.html'><div class='product col-lg-3 col-md-3 col-sm-6 col-xs-12 link'><img src=''></div></a>";
    }
    else {
        document.getElementById("output_geronimo_stilton").innerHTML = "<h1 class='text-danger' style='font-family:cursive;'>Sorry . We didn't find any thing matching this</h1>";
    }

}
var user = localStorage.getItem("Username_is_great");
var psw = localStorage.getItem("Password");
document.getElementById("Product_name").innerHTML = "Hello " + user;