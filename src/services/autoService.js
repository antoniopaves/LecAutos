import config from '../config/config.js'
import knex from 'knex'
export default class autoService{
    constructor(){
        this.knex = knex(config)
    }

    async obtenerAutos(){
        const autos = await this.knex.select('*').from('auto')
        return autos
    }

    async obtenerAutoNombre(nombre){
    const auto = await this.knex
        .select('*')
        .from('auto')
        .where('NOMBRE_AUTO', 'like', `%${nombre}%`)
        .orWhere('MARCA_AUTO', 'like', `${nombre}%`)
        .first();

        return auto;
    }
    
}

