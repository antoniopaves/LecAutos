import config from '../config/config.js'
import knex from 'knex'

export default class autoService {

    constructor(){
        this.knex = knex(config)
    }


    async obtenerAutos(){

        const autos = await this.knex
            .select('*')
            .from('auto');

        return autos;

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


    // ==========================
    // OBTENER POR ID
    // ==========================

    async obtenerAutoId(id){

        const auto = await this.knex
            .select('*')
            .from('auto')
            .where('ID_AUTO', id)
            .first();

        return auto;

    }



    // ==========================
    // CREAR AUTO
    // ==========================

    async crearAuto(auto){


        const resultado = await this.knex('auto')
            .insert({

                NOMBRE_AUTO: auto.nombre,
                MARCA_AUTO: auto.marca,
                MODELO_AUTO: auto.modelo,
                ANIO_AUTO: auto.anio,
                PRECIO_AUTO: auto.precio,
                ESTADO_AUTO: auto.estado,
                IMAGEN_AUTO: auto.imagen

            });


        return resultado;

    }




    // ==========================
    // ACTUALIZAR AUTO
    // ==========================

    async actualizarAuto(id, auto){


        const resultado = await this.knex('auto')
            .where('ID_AUTO', id)
            .update({

                NOMBRE_AUTO: auto.nombre,
                MARCA_AUTO: auto.marca,
                MODELO_AUTO: auto.modelo,
                ANIO_AUTO: auto.anio,
                PRECIO_AUTO: auto.precio,
                ESTADO_AUTO: auto.estado,
                IMAGEN_AUTO: auto.imagen

            });


        return resultado;

    }




    // ==========================
    // ELIMINAR AUTO
    // ==========================

    async eliminarAuto(id){


        const resultado = await this.knex('auto')
            .where('ID_AUTO', id)
            .del();


        return resultado;

    }


}