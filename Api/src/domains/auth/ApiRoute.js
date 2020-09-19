import express from 'express';
import Auth from './ApiController';

let router = express.Router();

router.post('/', Auth.login);
router.post('/create-account', Auth.createAccount);
router.get('/password-retrieve/send-email', Auth.sendEmail);
router.get('/password-retrieve/validate-code', Auth.validateCode);
router.post('/password-retrieve', Auth.passwordRetrieve);

export default router;
