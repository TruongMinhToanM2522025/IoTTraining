const http = require('http');
const port = process.env.PORT || 3000

const server = http.createServer((req, res) => {
	var html_head = [
        '<!DOCTYPE html>',
        '<html>',
            '<head>',
                '<meta charset="utf-8" />',
                '<title>Bài tập IoT</title>',
            '</head>',
            '<body>',
                '<center>',
				'<h1>Bài tập IoT</h1>',
				'<h2>Trương Minh Toàn - M2522025</h2>',
				'</center>',
            '</body>',
        '</html>'
    ].join('');
	var html_body = [
		
	].join('');
	res.statusCode = 200;
	res.writeHead(200, {
        'Content-Length': Buffer.byteLength(html_head, 'utf8'),
        'Content-Type': 'text/html; charset=utf-8'
    });
	res.write(html_head, 'utf8');
	res.end(html_body);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});