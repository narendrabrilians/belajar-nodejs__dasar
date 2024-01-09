import zlib from "zlib";
import fs from "fs";

const source = fs.readFileSync("u-zlib.mjs.txt");
console.info(source.toString());
const result = zlib.unzipSync(source);
console.info(result);
console.info(result.toString());
