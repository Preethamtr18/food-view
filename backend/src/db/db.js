const mongoose=require('mongoose');

const connectDB = async()=>{
   await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch((err)=>{
        console.log("mongodb connection error:",err);
    })
}

module.exports=connectDB;