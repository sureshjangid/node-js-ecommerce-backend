import { User } from "../models/user.model.js";
import ErrorHanlder from "../utils/error.util.js";
import { TryCatch } from "./error.middleware.js"

export const adminOnly = TryCatch(
    async(req,res,next)=>{
        const {id} = req.query;

        if(!id) return next(new ErrorHanlder("Please Login",401));

        const user = await User.findById(id)

        if(!user) return next(new ErrorHanlder("Id is Invalid",401));

        if(user.role!=="admin") return next(new ErrorHanlder("You don't have permissions",401));

        next();
    }

)