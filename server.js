// DEPENDENCIES
///////////////////
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// ROUTES
///////////////////
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username; 

    let message = `Hello there, ${username}!`; 
    if (username=='Mathilda')
        { message = ` What a delight it is to see you once more ${username}!`;
         
    res.send(message);
}});


app.get('/roll/:number', (req, res) => {
    const number = parseInt(req.params.number, 10); 

    if (isNaN(number)) {
        res.send('You must specify a number.');
    } else if (number < 1) {
        res.send('The number must be greater than 0.');
    } else {
        
        const roll = Math.floor(Math.random() * (number));
        res.send(`You rolled a ${roll}.`);
    }
});

app.get('/collectibles/:index', (req, res) => {
    const index = parseInt(req.params.index, 10); 

    if (!isNaN(index) && index >= 0 && index < collectibles.length) { 
        const item = collectibles[index];
        res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`); 
    } else {
        res.send("This item is not yet in stock."); 
    }
});

app.get('/shoes', (req, res) => {
    const { 'min-price': minPrice, 'max-price': maxPrice, type } = req.query;

    let filteredShoes = shoes;

    if (minPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price >= parseInt(minPrice, 10));
    }

    if (maxPrice) {
        filteredShoes = filteredShoes.filter(shoe => shoe.price <= parseInt(maxPrice, 10));
    }

    if (type) {
        filteredShoes = filteredShoes.filter(shoe => shoe.type.toLowerCase() === type.toLowerCase());
    }

    res.send(filteredShoes);
});


// LISTENER
///////////////////
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);

});


////DATA ARRAYS

const collectibles = [
    { name: 'shiny ball', price: 5.95 },
    {name: 'autographed picture of a dog', price: 10},
    {name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99}
];

const shoes = [
    { name: "Birkenstocks", price: 50, type: "sandal" },
    { name: "Air Jordans", price: 500, type: "sneaker" },
    { name: "Air Mahomeses", price: 501, type: "sneaker" },
    { name: "Utility Boots", price: 20, type: "boot" },
    { name: "Velcro Sandals", price: 15, type: "sandal" },
    { name: "Jet Boots", price: 1000, type: "boot" },
    { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];
