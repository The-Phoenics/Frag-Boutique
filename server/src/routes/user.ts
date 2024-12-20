import express from "express";
import { user_signin, user_signup, user_delete, user_verify, user_logout } from "../controllers/user.controller.js"
import { authenticate } from "../middlewares/auth.js";

const router = express.Router();

router.post('/signin', authenticate, user_signin);
router.post('/signup', user_signup);
router.post('/verify', user_verify);
router.post('/logout', user_logout);
router.post('/delete', user_delete);

export default router;
