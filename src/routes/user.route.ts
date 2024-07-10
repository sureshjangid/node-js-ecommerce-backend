import express from "express";
import { newUser } from "../controllers/user.controller.js";

const app = express.Router();

app.post("/register", newUser);

export default app;
