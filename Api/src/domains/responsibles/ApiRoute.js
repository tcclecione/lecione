import express from 'express';
import Schools from './ApiController';

let router = express.Router();

router.get('/:cpf', Schools.details);

export default router;
