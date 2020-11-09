const http =  require ('http');

const fs = require('fs');
const _ = require('lodash');


const server  = http.createServer((req, res)=>{
    //console.log(req.url, req.method);
    
    // lodash

    const num = _.random(0,12);
    console.log(num);

    const greet = _.once(() =>{
        console.log('hello from scene one production');

    });
    greet();


    // set header
    res.setHeader('Content-Type', 'text/html');

    let path = './/'
    switch(req.url) {
        case '/':
            path += 'home.html'
            res.statuscode = 200;
            break;
    // to redirect
        
        case '/home':
            res.statuscode = 303;
            res.setHeader('Location', '/home');
            res.end();
            break;

        case '/about':
            path += 'about.html';
            res.statuscode = 200;
            break;
        
        default:
            path += '404.html';
            res.statuscode= 404;
            break ;

    }

    fs.readFile(path, (err, data) =>{
        if (err){
            console.log(err);
            res.end();
        }else {
            res.write(data);
            res.end();
        }

    })

});


server.listen(3000, 'localhost', () =>{
    console.log('listening to server on port 3000');
});