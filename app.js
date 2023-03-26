const http = require('http');
const port = process.env.PORT || 3000
var onlyPath = require('path').dirname('C:\\Users\\trmin\\OneDrive\\Máy tính\\IoTGit\\a.jpg');
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
				'<img src="https://media.istockphoto.com/id/932066990/vi/vec-to/iot-h%C3%ACnh-%E1%BA%A3nh-minh-h%E1%BB%8Da.jpg?s=612x612&w=is&k=20&c=G9FSPYmbaySwaDSglr-rBZXpzdK7m-UBeiu4m3ESxYg="/>',
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