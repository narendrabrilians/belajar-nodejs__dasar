import util from "util";

console.info(util.format("Name : %s", "Narendra F.R"));

const person = { firstName: "Narendra", lastName: "F.R" };
console.info(util.format("Person : %j", person));
