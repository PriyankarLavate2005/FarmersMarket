const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/UserData")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    zip:{
        type:Number,
        required:true
    }

})

const Logindata = mongoose.model("userSignup",newSchema)

module.exports=Logindata
