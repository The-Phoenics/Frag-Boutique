import express, { Express } from "express";
import { user_signin, user_signup, user_delete, user_verify, user_logout } from "../controllers/user.controller.js"

const router = express.Router();

router.post('/signin', user_signin);
router.post('/signup', user_signup);
router.post('/verify', user_verify);
router.post('/logout', user_logout);
router.post('/logout', user_delete);
router.post('/access_token', user_delete);

export default router;
