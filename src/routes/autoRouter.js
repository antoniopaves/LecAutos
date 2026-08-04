import { Router } from "express";
import autoController from "../controller/autoController.js";

import { verificarSesion } from "../middlewares/authMiddleware.js";
import { esAdmin } from "../middlewares/adminMiddleware.js";


const router = Router();

router.get(
    "/",
    autoController.obtenerAutos
);


router.get(
    "/search",
    autoController.buscarAuto
);


router.get(
    "/admin",
    verificarSesion,
    esAdmin,
    autoController.obtenerAutosAdmin
);

router.get(
    "/nuevo",
    verificarSesion,
    esAdmin,
    autoController.formNuevo
);


router.post(
    "/crear",
    verificarSesion,
    esAdmin,
    autoController.crearAuto
);

router.get(
    "/editar/:id",
    verificarSesion,
    esAdmin,
    autoController.formEditar
);


router.post(
    "/actualizar/:id",
    verificarSesion,
    esAdmin,
    autoController.actualizarAuto
);


router.get(
    "/eliminar/:id",
    verificarSesion,
    esAdmin,
    autoController.eliminarAuto
);

router.get(
    "/cotizar/:id",
    verificarSesion,
    autoController.formCotizar
);


router.post(
    "/comprar",
    verificarSesion,
    autoController.registrarVenta
);

router.get(
    "/ventas/admin",
    esAdmin,
    autoController.obtenerVentasAdmin
);

export default router;

