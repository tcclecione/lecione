import express from 'express';
import Grade from './ApiController';

let router = express.Router();

router.get('/classroom/:id', Grade.listByClassroom);

export default router;
