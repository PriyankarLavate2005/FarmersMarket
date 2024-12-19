const express = require('express')
const app = express()
const cors = require('cors')
require('./DB/config')
const User = require('./DB/User')
app.use(cors())
app.use(express.json());

app.post('/signup',async(req,res)=>{
  let user=User(req.body)
  let result=await user.save()
  res.send(result)
})
app.listen(8500, () => {
  console.log("server started sucessfully")
})