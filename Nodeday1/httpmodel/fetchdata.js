let http = require('http');
const data = [
    {
        dishType : 'veg',
        dishName : 'pakoda',
        dishPrice : 'INR 100'
    },
    {
        dishType : 'non-veg',
        dishName : 'chicken kebab',
        dishPrice : 'INR 300'
    },
    {
        dishType : 'veg',
        dishName : 'paneer',
        dishPrice : 'INR 200'
    },
    {
        dishType : 'veg',
        dishName : 'paneer tikka',
        dishPrice : 'INR 250'
    }
]
http.createServer((req, res) => {
    if(req.url === '/menu' && req.method === 'GET') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(JSON.stringify(data));
        res.end();
    } else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end("error occured");
    }
}).listen(3001)