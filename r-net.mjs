import net from "net";

const server = net.createServer((client) => {
  console.info("Client connected");
  client.on("data", (data) => {
    console.info(`Receive : ${data.toString()}`);
    client.write(`${data.toString()}\r\n`);
  });
});

server.listen(3000, "localhost");
