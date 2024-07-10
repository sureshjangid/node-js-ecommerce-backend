import { User } from "../models/user.model.js";
import ErrorHanlder from "../utils/error.util.js";
import { TryCatch } from "../middleware/error.middleware.js";
import { findByEmail, findById } from "../services/user.service.js";
export const newUser = TryCatch(async (req, res, next) => {
    try {
        const { name, email, dob, age, gender, photo } = req.body;
        let user = await findByEmail(email);
        if (user) {
            return res.status(201).json({
                success: true,
                message: "Login Success",
                user
            });
        }
        if (!name || !email || !photo || !gender || !dob)
            return next(new ErrorHanlder("Please Add all fileds", 400));
        user = await User.create({ name, email, age, gender, photo, dob: new Date(dob) });
        return res.status(201).json({
            success: true,
            message: "user created",
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: error,
        });
    }
});
export const getAllUser = TryCatch(async (req, res, next) => {
    const users = await User.find({});
    return res.status(200).json({
        success: true,
        users
    });
});
export const singleUser = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const singleData = await findById(id);
    if (!singleData)
        return res.json({ success: false, message: "No Data found", code: 400 });
    return res.json({ success: true, data: singleData, code: 200 });
});
export const deleteUser = TryCatch(async (req, res, next) => {
    const id = req.params.id;
    const deleteData = await User.deleteOne({ _id: id });
    if (!deleteData)
        return res.json({ success: false, message: "No Data found", code: 400 });
    return res.json({ success: true, message: "Delete success", code: 200 });
});
