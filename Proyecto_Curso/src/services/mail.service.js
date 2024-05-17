const nodemailer = require("nodemailer");
require("dotenv").config();

const mandarMail = async (mailResponsable) => {
    try{
        const transporter = nodemailer.createTransport({
            service: "Gmail",
            auth: {
            user: process.env.MAIL,
            pass: process.env.MAIL_PASSWORD,
            }
        });

        const mailOptions = {
                                from: process.env.MAIL,
                                to: mailResponsable,
                                subject: "CV - ALTA DE USUARIO",
                                html: "<h1>CV</h1><p>Bienvenido! se creó un nuevo usuario con esta dirección de mail.</p>",
                            }

        transporter.sendMail(mailOptions,(error, info) => {
            if (error) {
              console.log('Error enviando el mail:', error);
            } else {
              console.log('Email sent:', info.response);
            }
          });
        
    }
    catch (err) 
    {
        console.log(err);
    }
};

module.exports = {
  mandarMail,
};