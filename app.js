const express = require('express');

const app = express();

// listen for request 

app.listen(3000);

app.get('/', (req, res)=>{

    res.sendFile('./home.html', {root : __dirname});
});

app.get('/about', (req, res) =>{

    res.sendFile('./about.html', {root : __dirname});
});

// to redirect
app.get('/about-us', (req, res) =>{
    res.redirect('/about');
});

//404 page

app.use((req, res) =>{
    res.status(404).sendFile('./404.html', {root : __dirname});
});
