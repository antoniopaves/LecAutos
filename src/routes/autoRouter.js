import { Router } from 'express';
import autoController from '../controller/autoController.js';

const router = Router();

router.get('/', autoController.obtenerAutos);

export default router;