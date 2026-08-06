import autoService from "../services/autoService.js";

const Service = new autoService();

const formatearAutos = (autos) => {
    return autos.map(auto => ({
        ...auto,
        PRECIO_AUTO: Number(auto.PRECIO_AUTO).toLocaleString("es-CL")
    }));
};

class AutoController {

    async obtenerAutos(req, res) {

        const autos = formatearAutos(await Service.obtenerAutos());

        res.render("autos/index", {
            autos,
            usuario: req.session.usuario
        });

    }

    async obtenerAutosAdmin(req, res) {

        const autos = formatearAutos(await Service.obtenerAutos());

        res.render("autos/indexAdmin", {
            autos,
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


        } catch (error) {

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


        } catch (error) {


            console.log(error);

            res.status(500)
                .send("Error actualizando vehículo");


        }

    }

    async eliminarAuto(req, res) {


        const { id } = req.params;


        try {


            await Service.eliminarAuto(id);


            res.redirect("/autos/admin");


        } catch (error) {


            console.log(error);

            res.status(500)
                .send("Error eliminando vehículo");


        }

    }

    async formCotizar(req, res) {

        const { id } = req.params;


        const auto = await Service.obtenerAutoId(id);


        res.render("autos/cotizar", {

            auto,
            usuario: req.session.usuario

        });

    }

    async registrarVenta(req, res) {

        try {

            const {
                idAuto
            } = req.body;


            const auto = await Service.obtenerAutoId(idAuto);


            const precio = auto.PRECIO_AUTO;


            const iva = precio * 0.19;


            const total = precio + iva;



            await Service.registrarVenta({

                idUsuario: req.session.usuario.id,

                idAuto: idAuto,

                precioTotal: total,

                iva: iva

            });



            res.render("autos/confirmacion", {

                usuario: req.session.usuario

            });



        } catch (error) {

            console.log(error);

            res.status(500)
                .send("Error registrando venta");

        }

    }

    async obtenerVentasAdmin(req, res) {

        const ventas = await Service.obtenerVentas();


        res.render("ventas/indexAdmin", {

            ventas,
            usuario: req.session.usuario

        });

    }

    async buscarAutosAPI(req, res) {

    try {

        const { texto } = req.query;


        const autos = await Service.buscarAutosFetch(texto);


        res.json({
            autos,
            usuario: req.session.usuario
        });

        console.log({autos, usuario: req.session.usuario });

    } catch(error) {

        console.log(error);

        res.status(500).json({
            mensaje: "Error buscando autos"
        });

    }

}

}

export default new AutoController();