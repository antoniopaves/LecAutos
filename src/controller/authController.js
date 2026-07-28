import AuthService from '../services/authService.js';

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

        res.json({
            ok: true,
            usuario: user.NOMBRE_USUARIO,
            rol: user.ROL_USUARIO
        });

    } catch (error) {
        console.log(error);

        res.status(500).json({
            ok: false,
            mensaje: "Error del servidor"
        });
    }
};
