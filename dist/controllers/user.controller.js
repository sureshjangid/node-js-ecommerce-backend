import { User } from "../models/user.model.js";
export const newUser = async (req, res, next) => {
    try {
        const { name, email, _id, dob, age, gender, photo } = req.body;
        const user = await User.create({
            name,
            email,
            _id,
            age,
            gender,
            photo,
            dob: new Date(dob),
        });
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
};
