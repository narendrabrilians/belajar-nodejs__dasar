import fs from "fs";
import fsPromise from "fs/promises";

const buffer = fs.readFileSync("g-file-system.mjs");

console.info(buffer.toString());

fs.writeFileSync("g-coba.txt", "Narendra");

const bufferPromise = await fsPromise.readFile("g-file-system.mjs");

console.info(bufferPromise.toString());

fsPromise.writeFile("g-coba-promise.txt", "Narendra");
