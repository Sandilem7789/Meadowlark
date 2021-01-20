const express = require("express");
const app = express();

//set up handlebars 
var handlebars = ("express3-handlebars").create({ defaultLayout: "main" });
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");


app.set("port", process.env.port || 3000);

app.get("/", (req, res) => {
    res.type("text/plain");
    res.send("Meadowlark Travel");
});
app.get("/about", (req, res) => {
    res.type("text/plain");
    res.send("About Meadowlark Travel");
});

//custom 404 page
app.use((req, res) => {
    res.type("text/plain");
    res.status(404);
    res.send("404 - Not found");
});

//custom 500 page
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.type("text/plain");
    res.status(500);
    res.send("500 - Server Error");
});

app.listen(app.get("port"), () => {
    console.log("Express started on http://localhost:" +
        app.get("port") + "; press Ctrl-C to terminate");
});