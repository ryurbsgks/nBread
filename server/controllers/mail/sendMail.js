const nodemailer = require('nodemailer');

module.exports = async (req, res) => {

  let email = req.body.email;
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_ID, 
      pass: process.env.MAIL_PASSWORD, 
    },
  });

  const CreateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 10 );
    return randomNumber;
  };

  let randomCode = `${CreateRandomNumber()}${CreateRandomNumber()}${CreateRandomNumber()}${CreateRandomNumber()}`;

  const mailOption = {
    from: process.env.MAIL_ID,
    to: email,
    subject: "제목 입니다",
    text: `텍스트 입니다 문자열은 ${randomCode} 입니다`,
    html: 
      `You got a message <br> 
      from : ${process.env.MAIL_ID} <br>
      to : ${email} <br>
      Message: ${randomCode}`,
  };

  try {
    await transporter.sendMail(mailOption, (err) => {
      if (err) {
        res.send({ message: '이메일 발송 실패'})
      } else {
        res.send({ data: randomCode, message: '이메일 발송 성공' })
      }
    });
  } catch (err) { 
    console.log('------------err-------------', err);
  }
};