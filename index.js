const nodemailer = require("nodemailer");
const cp = require('child_process');
var path = 'C:\\Users\\ashishc\\AppData\\Local\\Programs\\Opera\\opera.exe'


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

  const sendTable_to_mail = (emailAddress, mailData,__callback) => {
    const mailOptions = {
      from: "ashish.choubey@vivaconnect.co",
      to: emailAddress,
      subject: `mis daily`,
      text: mailData,
    };
  
    transport.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      }
      console.log("send2");
      __callback()
    });
  }

let to_mail =[
    "ashish.choubey@vivaconnect.co"
]

let retrycount = 0
function child(retrycount){
   try{
    
       cp.exec(path, (err, stdout, stderr) => {
           if (err) {
               console.warn("error",err);
           }
           else{
               console.warn("file executed successfully");
               console.error(new Error('Whoops, something bad happened'));

               var mesasage = "MIS EXE file executed successfully"
               sendTable_to_mail(to_mail,mesasage)
           }
         });
   }catch(err){
    retrycount=retrycount+1
    if(retrycount<3){
        child(retrycount)
        if(retrycount==2){
            var mesasage = "The EXE file is not exicuted"
            sendTable_to_mail(to_mail,mesasage)
        }
    }
   }
}

child(retrycount)





