
## Backend Setup

The backend is a simple Node.js server that handles registration, login, password reset, and course selection requests. 

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

// Mock database
const users = [];

// Routes
app.post('/register', (req, res) => {
    // Implement registration logic
    res.json({ message: 'Register successfully done!' });
});

app.post('/login', (req, res) => {
    // Implement login logic
    res.json({ message: 'Login successful!' });
});

app.post('/send-reset-code', (req, res) => {
    // Implement send reset code logic
    res.json({ message: 'Reset code sent!' });
});

app.post('/reset-password', (req, res) => {
    // Implement reset password logic
    res.json({ message: 'Password reset successfully!' });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
