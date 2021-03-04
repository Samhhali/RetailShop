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


// paginate
function paginate(model) {
  return (req, res, next) => {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const result = {};
    if (endIndex < model.length) {
      result.next = {
        page: page + 1,
        limit: limit,
      };  
    }
    if (startIndex > 0) {
      result.previous = {
        page: page - 1,
        limit: limit,
      };
    }
    try {
      result.results =  model.slice(startIndex, endIndex);
      res.paginatedResult = result;
      next();
    } catch (e) {
      res.status(500).json({ message: e.message });
    }
  };
}

