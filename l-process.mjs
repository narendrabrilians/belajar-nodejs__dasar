import process from "process";

setTimeout(() => {
  console.info("Hello!");
}, 2000);

process.addListener("exit", (exitCode) => {
  console.info(`Exit with code => ${exitCode}`);
});

console.info(process.version);
console.table(process.argv);
console.table(process.report);
console.table(process.env);

process.exit(1);
