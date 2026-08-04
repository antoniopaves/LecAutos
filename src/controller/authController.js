import AuthService from "../services/authService.js";

const authService = new AuthService();

export const login = async (req, res) => {

    const { correo, password } = req.body;

    try {

        const user = await authService.login(correo, password);

        if (!user) {
            return res.status(401).json({
                ok: false,
                mensaje: "Correo o contraseña incorrectos"
            });
        }

        // Guardar la sesión
        req.session.usuario = {
            id: user.ID_USUARIO,
            nombre: user.NOMBRE_USUARIO,
            correo: user.CORREO_USUARIO,
            rol: user.ROL_USUARIO.toLowerCase()
        };

        res.json({
            ok: true,
            usuario: user.NOMBRE_USUARIO,
            rol: user.ROL_USUARIO,
            redirect: user.ROL_USUARIO.toLowerCase() === "admin"
                ? "/autos/admin"
                : "/autos"
        });
console.log("SESION CREADA:", req.session.usuario);
    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            mensaje: "Error del servidor"
        });
    }

};

export const logout = (req, res) => {

    req.session.destroy((err) => {

        if (err) {
            return res.status(500).send("No se pudo cerrar la sesión");
        }

        res.redirect("/");

    });

};