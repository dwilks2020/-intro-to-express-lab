// DEPENDENCIES
///////////////////
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ROUTES
///////////////////
// Greeting route that accepts a username parameter in the URL
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username; // Extract the username from the URL

    const message = `Hello there, ${username}!`; // Create a greeting message
    res.send(message); // Send the message as a response
});


app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number, 10); // Extract and parse the number from the URL

    if (isNaN(number)) {
        // If the parameter is not a number
        res.send('You must specify a number.');
    } else if (number < 1) {
        // If the number is less than 1, return an error
        res.send('The number must be greater than 0.');
    } else {
        // Generate a random whole number between 0 and the given number
        const roll = Math.floor(Math.random() * (number + 1));
        res.send(`You rolled a ${roll}.`);
    }
});

// LISTENER
///////////////////
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
