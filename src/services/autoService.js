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
    
}

