const express = require("express");
const expressHandlebars = require("express-handlebars");

const app = express();

//set up handlebars 
app.engine("handlebars", expressHandlebars({ defaultLayout: "main", }));
app.set("view engine", "handlebars");


app.set("port", process.env.port || 3000);

//middeware for serving static files:
app.use(express.static(__dirname + "./public"));

app.get("/", (req, res) => res.render("home"));
app.get("/about", (req, res) => res.render("about"));

//custom 404 page
app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.render("404");
});

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.message);
    res.status(500);
    res.render("500");
});

app.listen(app.get("port"), () => {
    console.log("Express started on http://localhost:" +
        app.get("port") + "; press Ctrl-C to terminate");
});