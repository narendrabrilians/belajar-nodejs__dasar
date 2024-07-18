import net from "net";

const connection = net.createConnection({ port: 3000, host: "localhost" });

setInterval(() => {
  connection.write("NFR\r\n");
}, 2000);

connection.on("data", (data) => {
  console.info(`Client get data : ${data}`);
});
