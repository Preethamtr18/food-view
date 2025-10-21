const mongoose=require('mongoose');

const connectDB = async()=>{
   await mongoose.connect("mongodb://localhost:27017/food-view")
    .then(()=>{
        console.log("mongodb connected");
    })
    .catch((err)=>{
        console.log("mongodb connection error:",err);
    })
}

module.exports=connectDB;