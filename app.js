const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Welcome! Hello World!');
});

app.get("/about", (req, res) => {
    res.send('This is a very basic website I am making to practice server implementation and routing in Node.JS');
});

app.get("/contact-me", (req, res) => {
    res.send('You can find me!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

app.use((req, res, next) => {
    res.status(404).send("404'd!")
})
