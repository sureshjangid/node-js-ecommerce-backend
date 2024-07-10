import express from "express";
import userRoute from "./routes/user.route.js";
import { connectToDB } from "./config/db.js";
import { Error } from "./middleware/error.middleware.js";
const port = 4000;
const app = express();
app.use(express.json());
// DB CONNECTION
connectToDB();
// DEFAULT API
app.get("/", async (req, res) => {
    return res.send("APIs working");
});
// APIs PATHS
app.use("/api/v1/user", userRoute);
// ERROR HANDLING
app.use(Error);
// PORT LISTERN
app.listen(port, () => {
    console.log(`server is working on,${port}`);
});
