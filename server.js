var express = require('express')
var bodyParser = require('body-parser')


app = express()
port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port)

console.log('task API server started on: ' + port)


