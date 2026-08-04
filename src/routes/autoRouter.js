import { Router } from "express";
import autoController from "../controller/autoController.js";

import { verificarSesion } from "../middlewares/authMiddleware.js";
import { esAdmin } from "../middlewares/adminMiddleware.js";


const router = Router();


// =======================
// Usuario
// =======================

router.get(
    "/",
    verificarSesion,
    autoController.obtenerAutos
);


router.get(
    "/search",
    verificarSesion,
    autoController.buscarAuto
);


// =======================
// Administrador
// =======================

router.get(
    "/admin",
    verificarSesion,
    esAdmin,
    autoController.obtenerAutosAdmin
);


// Crear vehículo

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


// Editar vehículo

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


// Eliminar vehículo

router.get(
    "/eliminar/:id",
    verificarSesion,
    esAdmin,
    autoController.eliminarAuto
);


export default router;