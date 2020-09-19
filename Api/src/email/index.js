import sender from './sender';
import Handlebars from 'handlebars';

const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);

const Mail = {
  async send({ to, from, subject, view, data }) {
    const viewFile = (await readFile(`${__dirname}/../views/${view}`)).toString();

    const template = Handlebars.compile(viewFile);


    return sender.send({
      to,
      from,
      subject,
      html: template(data || {}),
    });
  },
};


export default Mail;
