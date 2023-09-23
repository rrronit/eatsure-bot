import mongoose from "mongoose"

const connectMongodb=()=>{
    const uri=process.env.URI as string
    try{

        mongoose.connect(uri)
        console.log("db connected")

    }
    catch(error){
        console.log("failed no connect")
    }
}
export default connectMongodb