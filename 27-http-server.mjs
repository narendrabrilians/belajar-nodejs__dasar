import http from "http";

const server = http.createServer((request, response) => {
  if (request.method === "POST") {
    console.log("POST");
  }
  console.log(request.method);
  console.log(request.url);
  console.log(request.headers);
  response.write("Hello World!");
  response.end();
});

server.listen(3000);
