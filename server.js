const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '1nt23is120.manushree@nmit.ac.in',  // Replace with your email
    pass: 'Manusonu#1326'    // Replace with your email password
  }
});

app.post('/submit-quiz', (req, res) => {
  const quizAnswers = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: '1nt23is120.manushree@nmit.ac.in',  // Replace with your email
    subject: 'Quiz Results',
    text: `Here are the quiz results:\n\n${JSON.stringify(quizAnswers, null, 2)}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send('Error sending email');
    }
    res.status(200).send('Quiz results sent to email');
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
