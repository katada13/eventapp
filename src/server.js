var express = require('express');
var app = express();


app.get('/user/12345', function (req, res) {
    res.send('{"username": "adrian"}');
});

app.use("/", express.static('src/public'));


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});