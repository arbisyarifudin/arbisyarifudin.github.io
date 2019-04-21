var express = require("express");
var app = express();

// "/" -> "Hi there, welcome to my assignment!"
app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

// ============================================================= 

// "/speak/pig" -> "The pig says 'Oink'"
app.get("/speak/:hewan", function(req, res){
    var suaranya = {
        pig: "Oink",
        cow: "Mooo",
        dog: "Woof Woof!",
        cat: "I hate you Human!"
    }
    var hewan = req.params.hewan.toLowerCase();
    var suara = suaranya[hewan];

    res.send("The " + hewan + " says, '" + suara + "'.");
});

// ============================================================= 

// "//repeat/hello/3" -> "hello hello hello"
app.get("/repeat/:pesan/:banyaknya", function(req, res){
    var psn = req.params.pesan;
    var banyak = Number(req.params.banyaknya);
    var hasil = "";

    for (var i = 0; i < banyak; i++) {
       hasil = hasil + psn + " ";
    }
    res.send(hasil);
});

// ============================================================= 

app.get("*", function(req, res){
    res.send("Sorry, page not found... What are you doing in your life?");
});

// Tell Express to Listen for request (start server)
app.listen(3000, "localhost", function(){
    console.log("Server has started!");
});
