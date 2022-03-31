
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0;
const path = require('path');
 
const express = require('express')
const app = express()
const port = 5500
 
const { engine } = require('express-handlebars')
app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
 
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
 
app.listen(port, () => {
    console.log("open on localhost port " + port)
})
 
//This is the server code to respond to requests
 

app.all(
    "/",
    function (request, response) {
        response.send(Index.html)
    }
)