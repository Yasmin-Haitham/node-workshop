var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'jassy6700@gmail.com',
      pass: 'wapatszmaclukjgi'
    }
  });
  
  var mailOptions = {
    from: 'jassy6700@gmail.com',
    to: 'aq.acc222@gmail.com',
    subject: "hey babe I'm just testing",
    text: "hey babe I'm sending an Email using Node.js for the workshop :3"
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });