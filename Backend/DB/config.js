
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/e-comDashboard").then(()=>{
    console.log("connected")
}).catch()
{
    console.log("could not connect")
}
const productSchema=new mongoose.Schema()

module .exports=productSchema


