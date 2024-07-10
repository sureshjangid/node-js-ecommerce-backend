import { User } from "../models/user.model.js";
export async function findByEmail(email) {
    const data = await User.findOne({ email });
    return data;
}
