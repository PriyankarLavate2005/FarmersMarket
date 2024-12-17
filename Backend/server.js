const express = require('express')
const app = express()
const cors = require('cors')
const Logindata = require('./mongo')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.send("welcome")
})
app.post('/', (req, res) => {
  const { phone, password } = req.body
  data = { phone, password }
  try {
    const user = Logindata.findOne({ phone })
    if (user) {
        res.json('ok');
        console.log("User logged in successfully");      
    }
    else{
      res.json("noaccount")
      console.log("create an account first")
    }
  }
  catch (e) {
     console.log(e)
  }
  // const insert =Logindata.insertMany([data])
  // if(insert){
  //     res.json('ok')
  //     console.log("data inserted sucessfully")
  // }
  // else{
  //     res.json('notok')
  //     console.log("couldnt insert")
  // }
})
app.get('/signup', (req, res) => {
  res.send("welcome")
})
app.post('/signup', (req, res) => {
  const { name, password, phone, zip, email } = req.body
  data = { name, password, phone, zip, email }
  const insert = Logindata.insertMany([data])
  if (insert) {
    res.json('ok')
    console.log("data inserted sucessfully")
  }
  else {
    res.json('notok')
    console.log("couldnt insert")
  }
})

app.listen(8500, () => {
  console.log("server started sucessfully")
})