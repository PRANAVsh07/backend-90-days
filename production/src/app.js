import express from "express";
import userRouter from "./routes/userRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(express.json());



app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/users", userRouter);

app.use(errorHandler);
export default app;