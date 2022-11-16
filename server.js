const express = require('express')
const app = express()
port =2000

app.get('/me',(req,res)=>{
    console.log(req,res);
    a()
    res.send()
})
app.listen(port,()=>{
    console.log("server is running on ",port);
})
const nodemailer = require("nodemailer");

  const link = `http://0.0.0.0:2000/me`;
  const output = `
    <button><a href="${link}">Click here</a></button>
    <h3>This is a test</h3> `

    
const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "ashish.choubey@vivaconnect.co",
      pass: "mxforeuyrkxqkztt",
    },
  });

  const sendTable_to_mail = (emailAddress, mailData) => {
    const mailOptions = {
      from: "ashish.choubey@vivaconnect.co",
      to: emailAddress,
      subject: `mis daily`,
      html: mailData,
    };
  
    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      }
      console.log("send2");
    });
  }
  sendTable_to_mail("ashish.choubey@vivaconnect.co",output)



function a(){
    console.log("Aaaaaaaaaaaaaaaaaaaaaaa");
}