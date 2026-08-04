import { Router } from "express";
import { login, logout } from "../controller/authController.js";

const router = Router();

router.get("/", (req, res) => {

    if (req.session.usuario) {

        if (req.session.usuario.rol === "admin") {
            return res.redirect("/autos/admin");
        }

        return res.redirect("/autos");
    }

    res.render("login");

});

router.post("/login", login);

router.get("/logout", logout);

export default router;