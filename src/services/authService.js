import config from '../config/config.js';
import knex from 'knex';

export default class AuthService {

    constructor() {
        this.knex = knex(config);
    }

    async login(correo, contrasena) {

        const usuario = await this.knex
            .select('*')
            .from('usuario')
            .where({
                CORREO_USUARIO: correo,
                CONTRASENA_USUARIO: contrasena
            })
            .first();

            console.log(usuario)

        return usuario;
    }
}

export const login = async (usuario, password) => {
    const user = await authService.buscarUsuario(usuario);

    if (!user) {
        return null;
    }

    if (user.password !== password) {
        return null;
    }

    return user;
};