import express from 'express';
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const expressHandlebars = require('express-handlebars')
const hbs = expressHandlebars.create({defaultLayout: "main"});

app.use(express.static('views'));
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(bodyParser.urlencoded({extends: true}))

//handlebars
app.set('vew cache', true);
app.set('view engine', "handlebars");
app.engine('handlebars', hbs.engine)

app.get("/formulario", (req:express.Request,res:express.Response)=>{
    res.sendFile("formulario.html")
})

app.post("/listaUsuarios", (req:express.Request,res:express.Response)=>{
    res.render("formulario.handlebars", {datos:[{name: req.body.name, surname: req.body.surname}]});
})    





app.listen(3000, ()=>{
    console.log("App funcionando---------------")
});