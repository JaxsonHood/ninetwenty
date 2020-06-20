const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use(express.static("public"));

// connect Mongoose to your DB
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ninetwenty', { useNewUrlParser: true });

//here we are configuring dist to serve app files
app.use('/', serveStatic(path.join(__dirname, '/dist')))

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
})

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("Connected to database ");
});

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)