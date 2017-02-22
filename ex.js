var http=require('http');
http.createServer(function(req,res)
{
res.writeHead(200,{'content-type':'text/html'});
res.write('<html>'+'<body>'+'hai'+'<font size="20">'+'<br>'+'hello world'+
'</body>'+'</html>');
res.end();
}).listen(8080);
