const nodemailer = require("nodemailer");
const emailConfig = require("../mail/config.mail.json");

require("dotenv/config");

class email {

  public trasnporter = nodemailer.createTransport({
    host: emailConfig.gmail.host,
    port: emailConfig.gmail.port,
    secure: emailConfig.gmail.secure,
    auth: {
      user: process.env.USERNAME_EMAIL,
      pass: process.env.PASSWORD_EMAIL
    },
  });

  public sendMail(email, msg) {
    this.trasnporter
      .sendMail({
        from: process.env.USERNAME_EMAIL,
        to: email,
        subject: "TRANSITAR",
        text: "MENSAGEM AUTOMÁTICA DE TRANSITAR",
        html: msg,
      })
      .then((message) => {
        console.log(message);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

export default new email();
