const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock database
let users = [];
let resetCodes = {};

// Endpoint to register user
app.post('/register', (req, res) => {
    const { firstName, lastName, email, dob, username, password } = req.body;
    users.push({ firstName, lastName, email, dob, username, password });
    res.send({ message: 'Register successfully done!' });
});

// Endpoint to login user
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        res.send({ message: 'Login successful!' });
    } else {
        res.status(401).send({ message: 'Invalid credentials' });
    }
});

// Endpoint to send reset code
app.post('/send-reset-code', (req, res) => {
    const { email } = req.body;
    const user = users.find(user => user.email === email);
    if (user) {
        const resetCode = Math.floor(100000 + Math.random() * 900000).toString();
        resetCodes[email] = resetCode;
        // Send email logic here
        // For simplicity, we'll log the reset code
        console.log(`Reset code for ${email}: ${resetCode}`);
        res.send({ message: 'Reset code sent!' });
    } else {
        res.status(404).send({ message: 'Email not found' });
    }
});

// Endpoint to reset password
app.post('/reset-password', (req, res) => {
    const { email, resetCode, newPassword } = req.body;
    if (resetCodes[email] === resetCode) {
        const user = users.find(user => user.email === email);
        if (user) {
            user.password = newPassword;
            delete resetCodes[email];
            res.send({ message: 'Password reset successfully!' });
        } else {
            res.status(404).send({ message: 'User not found' });
        }
    } else {
        res.status(400).send({ message: 'Invalid reset code' });
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
