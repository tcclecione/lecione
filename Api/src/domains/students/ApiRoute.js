import express from 'express';
import Students from './ApiController';

let router = express.Router();

router.get('/', Students.list);
router.get('/responsible', Students.listByReponponsible);

export default router;
