import { User } from "../models/user.model.js";
export async function findByEmail(email) {
    return await User.findOne({ email });
}
export async function findById(_id) {
    return await User.findById(_id);
}
