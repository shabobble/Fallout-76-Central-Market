const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });
