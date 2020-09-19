import express from 'express';
import Order from './ApiController';

let router = express.Router();

router.get('/', Order.list);

export default router;
