import express from 'express';
import Schools from './ApiController';

let router = express.Router();

router.get('/', Schools.list);
router.get('/:id', Schools.details);
router.get('/contact/:id', Schools.contact);
router.get('/period/:id', Schools.periodSchool);

export default router;
