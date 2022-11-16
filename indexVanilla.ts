// const fs = require('fs');
// const http = require('http');

// http.createServer(function (req, res) {

//     const fileName = "." + req.url;
    
//     const fourOhFour = () => fs.readFileSync('./404.html', function(err, data) {
//         if (err) {
//             return '404 Page Not Found';
//         }
//         return data;
//     });

//     fs.readFile(fileName, function(err, data) {
//         if (err) {
//             res.writeHead(404, {'Content-Type': 'text/html'});
//             res.write(fourOhFour());
//             return res.end();
//         }
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data)
//         return res.end();
//     })
    
// }).listen(8080);