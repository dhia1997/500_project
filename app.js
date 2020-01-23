const express = require('express');
const app = express();
const cors = require('cors');


app.get('/500', (req, res) => {
    // socket io logic here
    res.status(200).json({
        message: 'As you can see our reponses are always 200 unlike bad developers'
    });
});


app.listen(4001, () => {
    console.log('THE 500 ERROR IS WORKING NOW');
});