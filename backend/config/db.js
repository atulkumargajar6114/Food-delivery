import mongoose from "mongoose";

export const connectDB=async ()=>{
  await mongoose.connect('mongodb+srv://atulnitmca:atul123@cluster0.53spcvs.mongodb.net/food-del')
  .then(()=>{
    console.log('DB Connected');
  })
}