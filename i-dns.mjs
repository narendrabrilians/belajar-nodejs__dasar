import dns from "dns/promises";

const ip = await dns.lookup("google.com");

console.log(ip.address);
console.log(ip.family);
