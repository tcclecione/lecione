import express from 'express';
import Timeline from './ApiController';

let router = express.Router();

router.get('/:id', Timeline.list);

export default router;
