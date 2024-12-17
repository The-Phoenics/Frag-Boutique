import express from "express";
import env from "dotenv";
env.config();
const PORT = process.env.PORT;
const app = express();
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
import userRouter from "./src/routes/user.js";
app.use('/auth', userRouter);
app.get('*', (req, res) => {
    res.status(404).send("404 NOT FOUND");
});
app.listen(PORT, () => console.log(`Server started at ${PORT}`));
