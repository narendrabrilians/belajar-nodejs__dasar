import fs, { read } from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Narendra\n");
writer.write("Febriliansyah\n");
writer.write("R\n");
writer.end();

const reader = fs.createReadStream("target.log");

reader.addListener("data", (data) => {
  console.log(data.toString());
});
