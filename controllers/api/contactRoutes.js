const router = require("");
const mail = require('../../config/mail');
const { Weapon, Armor } = require("../../models");
router.post('/', async (req, res) => {
    // TODO: load item specified, with owner's email
    const item = req.body.type === 'weapons'
        ? Weapon.findByPk(req.body.id)
        : Armor.findByPk(req.body.id)

  // send mail with defined transport object
  let info = await mail.sendMail({
    // from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "bar@example.com, baz@example.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent.")
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

})