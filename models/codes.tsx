import mongoose from 'mongoose'

const codeSchema=new mongoose.Schema({
    code:String,
    used:{type:Boolean,default:false} 
})  

const codes=mongoose.models.Code || mongoose.model('Code', codeSchema)
export default codes 