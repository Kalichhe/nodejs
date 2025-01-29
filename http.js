const http = require("node:http");

const server = http.createServer((request, response) => {
  console.log(request.url);

  if (request.url == "/") {
    response.write("Welcome to the server");
    return response.end();
  }
  if (request.url == "/about") {
    response.write("About");
    return response.end();
  }
  response.write(`
      <h1>Not found</h1>
      <p>This page does not exist</p>
      <a href="/">Return to the main page</a>
      `);
  response.end();
});

server.listen(3000);

console.log("Servidor escuchando en el puerto 3000");
