import autoService from "../services/autoService.js";

const Service = new autoService();


class AutoController {

    async obtenerAutos(req, res) {

        const autos = await Service.obtenerAutos();

        res.render("autos/index", {
            autos,
            usuario: req.session.usuario
        });
    }

    async obtenerAutosAdmin(req, res) {

        const autos = await Service.obtenerAutos();

        res.render("autos/indexAdmin", {
            autos,
            usuario: req.session.usuario
        });
    }

    async buscarAuto(req, res) {

        const { nombre } = req.query;

        const autos = await Service.obtenerAutoNombre(nombre);

        res.render("autos/index", {
            autos: Array.isArray(autos) ? autos : [autos],
            usuario: req.session.usuario
        });

    }

    async formNuevo(req, res) {

        res.render("autos/nuevo", {
            usuario: req.session.usuario
        });

    }



    async crearAuto(req, res) {

        try {

            await Service.crearAuto(req.body);

            res.redirect("/autos/admin");


        } catch(error) {

            console.log(error);

            res.status(500).send("Error creando vehículo");

        }

    }

    async formEditar(req, res) {

        const { id } = req.params;


        const auto = await Service.obtenerAutoId(id);


        res.render("autos/editar", {
            auto,
            usuario: req.session.usuario
        });


    }

    async actualizarAuto(req, res) {


        const { id } = req.params;


        try {


            await Service.actualizarAuto(
                id,
                req.body
            );


            res.redirect("/autos/admin");


        } catch(error) {


            console.log(error);

            res.status(500)
            .send("Error actualizando vehículo");


        }

    }

    async eliminarAuto(req,res){


        const { id } = req.params;


        try {


            await Service.eliminarAuto(id);


            res.redirect("/autos/admin");


        } catch(error){


            console.log(error);

            res.status(500)
            .send("Error eliminando vehículo");


        }

    }

}

export default new AutoController();