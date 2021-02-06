const nodemailer = require("nodemailer");
const emailConfig = require("../mail/config.mail.json");

class email {
  private trasnporter = nodemailer.createTransport({
    host: emailConfig.gmail.host,
    port: emailConfig.gmail.port,
    secure: emailConfig.gmail.secure,
    auth: {
      user: process.env.USERNAME_EMAIL,
      pass: process.env.PASSWORD_EMAIL,
    },
  });

  public sendMail(email, msg) {
    this.trasnporter
      .sendMail({
        from: "<>",
        to: email,
        subject: "Projeto PET",
        text: "Mensagem Automatica de PET ",
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
