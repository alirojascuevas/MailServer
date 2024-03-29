const express = require("express");
const router = express.Router();
const formData =require("form-data")
const Mailgun = require("mailgun.js")



require("dotenv").config();

const mailgun = new Mailgun(formData);
const client = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY});



router.post("/",(req, res)=>{
    const {name, from, subject,message}= req.body;
    const messageData = {
        from: `${name} <${from}>`,
        to: 'airsencecafam@gmail.com',
        subject: subject,
        text: message
    };
  
  client.messages.create(process.env.MAIGUN_DOMAIN, messageData)
   .then((msg) => {
    res.send({
        message:'Correo enviado correctamente'
    })
     console.log(msg);
   })
   .catch((err) => {
    res.send({
        message:'Error en el de correo'
    })
     console.error(err);
   });
});


module.exports = router;
//






