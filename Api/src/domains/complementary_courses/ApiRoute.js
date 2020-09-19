import express from 'express';
import ComplementaryCourses from './ApiController';

let router = express.Router();

router.get('/school', ComplementaryCourses.listBySchool);
router.get('/school/details', ComplementaryCourses.listByDetails);
router.post('/evaluation', ComplementaryCourses.createEvaluation);
router.get('/evaluation/list', ComplementaryCourses.listEvaluation);
router.get('/period/:id', ComplementaryCourses.periodCourseType);

export default router;
