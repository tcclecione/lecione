import express from 'express';
import Auth from './CMSController';

let router = express.Router();

router.post('/', Auth.login);

export default router;
