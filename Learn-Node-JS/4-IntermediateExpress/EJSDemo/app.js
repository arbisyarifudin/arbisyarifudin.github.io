var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public")); // jadikan folder 'public' diketahui oleh express
app.set("view engine", "ejs"); // menghilangkan ekstensi ejs pada render()

app.get("/", function(req, res){
    res.render("home");
});

app.get("/fellinlove/:sesuatu", function(req, res){
    var thing = req.params.sesuatu;
    res.render("love", {thingVar: thing});
});


app.get("/posts", function(req, res){
    var posts = [
        {title: "Post Pertama", author: "Bot"},
        {title: "Cara membuat Kue Dadar Lezat", author: "Susan"},
        {title: "Begini tips Solo Traveing aman bagi Wanita", author: "Arbi"}
    ];
    res.render("posts", {postsVar: posts});
});

// Post Request - Tambah Teman
var teman = ["Arbi", "Budi", "Chandra", "Deni", "Erwin"]

app.get("/friends", function(req, res){
    res.render("friends", {temanVar: teman});
});

app.post("/addFriend", function(req, res){
    var temanBaru = req.body.newFriend;
    teman.push(temanBaru);
    res.redirect("/friends");
});

// error page
app.get("*", function(req, res){
    res.send("Page not Found!");
});

// listen / start sever
app.listen(3000, "localhost", function(){
    console.log("Server has running!");
});
