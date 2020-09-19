import express from 'express';
import Monitorings from './ApiController';

let router = express.Router();

router.get('/school', Monitorings.listBySchool);
router.get('/school/details', Monitorings.listByDetails);
router.post('/evaluation', Monitorings.createEvaluation);
router.get('/evaluation/list', Monitorings.listEvaluation);
router.get('/period/:id', Monitorings.periodMonitoringType);

export default router;
