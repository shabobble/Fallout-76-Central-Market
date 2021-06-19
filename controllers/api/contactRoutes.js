const router = require("express").Router();
const mail = require('../../config/mail');
const { Weapon, Armor } = require("../../models");

router.post('/', async (req, res) => {
    // TODO: load item specified, with owner's email
    const item = req.body.type === 'weapons'
        ? await Weapon.findByPk(req.body.id)
        : await Armor.findByPk(req.body.id)

        if (item === null) {
            console.log('not found')
        }

  // send mail with defined transport object
  let info = await mail.sendMail({
    // from: '"Fred Foo 👻" <foo@example.com>', // sender address
    to: "pksullivan@yahoo.com", // list of receivers
    subject: "Someone on Vault 76 Marketplace is interested in your item!", // Subject line
    html: "<b>Hello world?</b>" + JSON.stringify(item.toJSON()), // html body
  });

  console.log("Message sent.")
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
res.status(200).send()
})

module.exports = router;