const nodemailer = require("nodemailer");

async function dispatchEmail(email, cod) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'tcclecione@gmail.com',
      pass: 'tcclecione2020'
    }
  });

  var mailOptions = {
    from: 'tcclecione@gmail.com',
    to: `${email}`,
    subject: `Seu codigo é ${cod}`,
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    } else {
      return console.log('Email sent: ' + info.response);
    }
  });
}

export default dispatchEmail;
