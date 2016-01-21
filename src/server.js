var express = require('express');
var app = express();


app.get('/user/12345', function (req, res) {
    res.send('{"username": "adrian"}');
});

app.use("/events", function (req, res) {
    res.send(JSON.stringify([{
        img: "http://lorempixel.com/320/240/nightlife/",
        name: "Blues concert",
        count: 0,
        date: new Date()
    }, {
        img: "http://lorempixel.com/320/240/people/",
        name: "ee meeting",
        count: 0,
        date: new Date()
    }, {
        img: "http://lorempixel.com/320/240/sports/",
        name: "football",
        count: 0,
        date: new Date()
    }]));
});
app.use("/", express.static('src/public'));


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});