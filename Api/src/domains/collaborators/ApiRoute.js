import express from 'express';
import Collaborators from './ApiController';

let router = express.Router();

router.get('/', Collaborators.list);
router.get('/office', Collaborators.listByOffice);
router.get('/:id', Collaborators.details);

export default router;
