const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});


// Email sending route
app.post("/send-email", async (req, res) => {
    const { name, email, message } = req.body;

    try {
        await transporter.sendMail({
            from: email, // Sender address (user email)
            to: "your-email@gmail.com", // Your email address
            subject: `New message from ${name}`,
            text: message,
        });

        res.status(200).send({ message: "Email sent successfully!" });
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: "Failed to send email." });
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
