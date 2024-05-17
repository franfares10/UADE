const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendMail = async (email, subject, text) => {

const msg = {
  to: email,
  from: process.env.MAIL_USER,
  subject,
  text,
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })
}

module.exports = {
    sendMail,
};

    //NODE MAILER:
    // const sendMail = async (email, subject, text) => {
    //     try {
    //         const transporter = nodemailer.createTransport({
    //             service: 'gmail',
    //             auth: {
    //                 user: process.env.MAIL_USER,
    //                 pass: process.env.MAIL_PW,
    //             },
    //         });
    
    //         const mailOptions = {
    //             from: process.env.MAIL_USER,
    //             to: email,
    //             subject,
    //             text,
    //         };
    
    //         const info = await transporter.sendMail(mailOptions);
    //         console.log(`Email sent: ${info.response}`);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }