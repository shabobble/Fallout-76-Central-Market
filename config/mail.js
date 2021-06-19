const nodemailer = require("nodemailer");

  // create reusable transporter object using the default SMTP transport
module.exports = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'vault76marketplace@gmail.com', // generated ethereal user
      pass: 'appumrpfdtgrlgey', // generated ethereal password
    },
  });
  
  // xckseopouahnqeht