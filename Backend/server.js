const express = require('express')
const app = express()
const cors = require('cors')
require('./DB/config')
const User = require('./DB/User')
app.use(cors())
app.use(express.json());

app.post('/signup', async (req, res) => {
  let user = User(req.body)
  let result = await user.save()
  result=result.toObject();
  delete result.password
  res.send(result)
})
app.post('/login', async (req, res) => {
  let user = User.findOne(req.body).select("-password")
 
  if (req.body.email && req.body.password) {
    if (user) {
      res.send(user)
    }
    else {
      res.send({ result: "No user Found" })
    }
  }
  else {
    res.send({ result: "password and email does not found" })
  }
})
app.listen(8500, () => {
  console.log("server started sucessfully")
})