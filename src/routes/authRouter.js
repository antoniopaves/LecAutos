import { Router } from "express";
import { login } from "../controller/authController.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("login");
});

router.post("/login", login);

export default router;
