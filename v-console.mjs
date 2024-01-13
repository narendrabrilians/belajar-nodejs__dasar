import { Console, log } from "console";
import fs from "fs";

const logFile = fs.createWriteStream("log-file.log");

const logTarget = new Console({ stdout: logFile, stderr: logFile });

logTarget.info("Hello World!");
logTarget.error("Error!");

const person = { firstName: "Narendra", lastName: "F.R" };

logTarget.table(person);
