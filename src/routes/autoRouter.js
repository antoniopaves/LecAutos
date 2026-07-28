import { Router } from 'express';
import autoController from '../controller/autoController.js';

const router = Router();

router.get('/', autoController.obtenerAutos);
router.get('/search', autoController.buscarAuto);
export default router;