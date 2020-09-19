import express from 'express';
import auth from '../domains/auth/ApiRoute';
import cmsAuth from '../domains/auth/CMSRoute';

const router = express.Router();

router.use('/api/auth', auth);
router.use('/cms/auth', cmsAuth);

export default router;
