export const esAdmin = (req, res, next) => {

    if (!req.session.usuario) {
        return res.redirect("/");
    }

    if (req.session.usuario.rol !== "admin") {
        return res.redirect("/autos");
    }

    next();

};