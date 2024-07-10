import { User } from "../models/user.model.js";

export async function findByEmail(email:string){
    return await User.findOne({email})
}

export async function findById(_id:string){
    return await User.findById(_id)
}