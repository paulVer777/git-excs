const path = require('path')

// __dirname : contain path to current directory (to server.js)
const publicPath = path.join(__dirname,'..','/public')

const express = require('express');
const app = express();
const port = process.env.PORT || 3000 // if we on heroku we are going to use first value which heroku provides to us (dynamic value), if not we use 3000 static port


app.use(express.static(publicPath)) //expres will serve the files from that directory : publicPath

// app.get, function that run when someone makes a request to our server



app.get('*', (req, res) => { // (* - matches all paths, function that takes care of all unhandling requests (what to do))
//(req,res) - req is a object that contains information about request and res is a object that lets us to manipulate what response shuld we give to request
res.sendFile(path.join(publicPath,'index.html')) // redirects to index.html


})

app.listen(port,()=> { // (port that express should use, function that gets called when the server is up)
    console.log('server is up')
})