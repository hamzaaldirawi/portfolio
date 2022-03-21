const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");

const contactEmail = nodemailer.createTransport({
    host: "mail.hamzaaldirawi.com",
    port: 465,
    secure: true, 
    auth: {
      user: process.env.CONTACT_EMAIL, 
      pass: process.env.CONTACT_PASSWORD
    },
    tls: {
        rejectUnauthorized: false
    }
});

contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
});

router.post('/api/contact', (req, res) => {
    const { userName, userEmail, userMessage } = req.body;

    if(userEmail.includes('@')) {
        const mail = {
            from: userEmail,
            to: process.env.CONTACT_EMAIL,
            subject: "Portfolio Message",
            html: `<p>Name: ${userName}</p>
                   <p>Email: ${userEmail}</p>
                   <p>Message: ${userMessage}</p>`,
        };
    
        contactEmail.sendMail(mail, (error) => {
            if (error) {
                return res.status(400).json({ message: "ERROR Sending Message" });
            } else {
                return res.status(200).json({ message: "Message Sent" });
            }
        });
    } else {
        return res.status(400).json({ 'message': 'Please Enter Valid Email'})
    }
});

module.exports = router;