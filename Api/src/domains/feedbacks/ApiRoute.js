import express from 'express';
import Feedbacks from './ApiController';

let router = express.Router();

router.get('/', Feedbacks.list);
router.get('/student', Feedbacks.listByStudent);

export default router;
