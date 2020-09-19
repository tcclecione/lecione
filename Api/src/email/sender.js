import factory from './factory';
const env = require('dotenv').config().parsed;
export default factory(env.SENDGRID_API_KEY);
