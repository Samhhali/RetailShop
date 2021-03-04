var express = require('express')
var bodyParser = require('body-parser')


app = express()
port = process.env.port || 3000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port)

console.log('task API server started on: ' + port)


// Get all providers
app.get('/providers', (req,res)=> {
  pool.getConnection((err,connection)=>{
     if(err) throw err
     console.log('connected as id '+ connection.threadId)
     connection.query('SELECT* from providers', (err,rows)=> {
         connection.release()

         if(!err){
              res.json(res.paginatedResult)
         }else{
             console.log(err)
         }
         console.log('the data from products are : \n', rows)
     })
  })
})

// Get Products in Specific category by CategoryID
app.get('/products/:id', (req,res)=> {
  pool.getConnection((err,connection)=>{
     if(err) throw err
     connection.query('SELECT* from products where CategoryID = ?',[req.params.id], (err,rows)=> {
         connection.release()
         if(!err){
            res.json(res.paginatedResult)
         }else{
             console.log(err)
         }
     })
  })
})

