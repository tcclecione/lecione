const mailer = require('@sendgrid/mail');

export default (apiKey) => {
  mailer.setApiKey(apiKey);
  return mailer;
};
