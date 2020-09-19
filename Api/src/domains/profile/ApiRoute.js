import express from 'express';
import Profile from './ApiController';

let router = express.Router();

router.get('/details', Profile.details);

export default router;
