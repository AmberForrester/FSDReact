const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');


// Create the express server that listens on a specified port 
const app = express(); //Remember express sets up the server 
const PORT = process.env.PORT || 5000; // Always make sure the backend server and frontend(React application) are running on different ports. 

app.use(cors()); //Allows web page access to restricted resources from a server on a domain different than current webpage. For example - cross origin requests = CORS

app.use(bodyParser.json()); //Will process incoming requests, like POST. Think of it as being used for parsing incoming requests. 

// Set up a POST endpoint using /send-email to handle the form submissions, this /send-email endpoint uses Nodemailer to send an email with the submitted form data 
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Set up Nodemailer transport; using Nodemailer to send emails from within this endpoint
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'nodemailerjs444@gmail.com',
      pass: 'abfu mlgy mfey hfqp'
    }
  });

  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'nodemailerjs444@gmail.com',
    subject: `Contact form submission from ${name}`,
    text: `You have received a new message from your website contact form.\n\n` +
          `Here are the details:\n` +
          `Name: ${name}\n` +
          `Email: ${email}\n` +
          `Message: ${message}`,
          replyTo: email
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send('Email sent: ' + info.response);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});