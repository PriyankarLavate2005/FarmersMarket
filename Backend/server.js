const express=require('express')
const app =express()
const cors=require('cors')
const Logindata =require('./mongo')
app.use(cors())
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));
app.get('/signup',(req,res)=>{
    res.send("welcome")
})
app.post('/signup',(req,res)=>{
    const {name,password,phone,email,zip}=req.body
    data={name,password,phone,email,zip}
    const insert =Logindata.insertMany([data])
    if(insert){
        res.json('ok')
        console.log("data inserted sucessfully")
    }
    else{
        res.json('notok')
        console.log("couldnt insert")
    }
})
app.listen(8000,()=>{
    console.log("server started sucessfully")
})