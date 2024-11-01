const dotenv = require('dotenv');
const {
  Resend
} = require('resend');
dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMail = async (email, subject, htmlTemplate) => {
  resend.emails.send({
    from: 'Acme <onboarding@resend.dev>',
    to: email,
    subject,
    html: htmlTemplate
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

//SENDGRID
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const sendMail = async (email, subject, text) => {
//   sgMail
//     .send(msg)
//     .then((response) => {
//       console.log(response[0].statusCode)
//       console.log('Email sent')
//     })
//     .catch((error) => {
//       console.error(error)
//     })
// }