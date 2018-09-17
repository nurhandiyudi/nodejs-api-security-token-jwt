const express = require('express')
const app = express()

var jwt = require('jsonwebtoken');
 var token = ''
 
app.get('/sign', (req, res) => 
   token = jwt.sign({
    data: 'foobar'
  }, 'secret', { expiresIn: 60 * 60 },
  res.send(token))
)

app.get('/verify', (req, res) => 
    jwt.verify(token, 'secret', function(err, decoded) {
      if(err){
        console.log(err)
      } else {
        console.log(decoded.data)
      }
    })
)

app.get('/token/:token', (req, res) => 
    jwt.verify(req.headers.token, 'secret', function(err,decoded){
       if(err){
        console.log(err)
       } else {
        console.log(decoded.data)
       }
   })
)

app.listen(8080, () => console.log('Example app listening on port 3000!'))