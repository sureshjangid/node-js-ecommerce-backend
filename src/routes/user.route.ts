import express from "express";
import { deleteUser, getAllUser, newUser, singleUser } from "../controllers/user.controller.js";
import { adminOnly } from "../middleware/auth.js";

const app = express.Router();

app.post("/login", newUser);
app.get("/all",adminOnly,getAllUser);
app.route("/:id").get(singleUser).delete(deleteUser)
export default app;
