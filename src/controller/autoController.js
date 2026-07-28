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

}

export default new AutoController();
