import connectMongodb from "@/libs/mongodb";
import codes from "@/models/codes";
import { NextResponse } from "next/server";

export const GET=async(req:Request)=>{
    await connectMongodb()
    const allCodes= await codes.find()

    return NextResponse.json(allCodes)

}
export const DELETE=async(req:Request)=>{
    
    const _id=await req.json()
    await connectMongodb()
    await codes.findByIdAndDelete(_id);
    return NextResponse.json("done")

}
export const PUT=async(req:Request)=>{
    const _id=await req.json()
    await connectMongodb()
    const code = await codes.findById(_id);
    if (code){

    
    code.used = !code.used;
    await code.save();
    return NextResponse.json("done")
    }
    return NextResponse.json("not found")

}
