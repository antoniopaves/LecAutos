import autoService from '../services/autoService.js'
const Service = new autoService()

class AutoController{

     async obtenerAutos(req, res) {
        const autos = await Service.obtenerAutos();

        console.log(autos)

        res.render('autos/index', {
            autos
        });
    }

    async buscarAuto(req, res) {
        const { nombre } = req.query;

        const autos = await Service.obtenerAutoNombre(nombre);

        res.render('autos/index', {
            autos: Array.isArray(autos) ? autos : [autos]
        });
    }

}

export default new AutoController();
