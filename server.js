my_http = require("http");
my_http.createServer(function(request,response){
    console.log("node server is running in 8080");
    response.writeHeader(200,{"Content-Type":"test/plain"});
    response.write("Hello");
    response.end();
}).listen(8080);
console.log("node server is running in 8080");