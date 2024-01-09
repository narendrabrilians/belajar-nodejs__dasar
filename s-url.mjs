import { URL } from "url";

const nfr = new URL("https://www.test.com/belajar?kelas=nodejs");

nfr.host = "www.berubah.com";
nfr.searchParams.append("status", "premium");

console.info(nfr.toString());
console.info(nfr.protocol);
console.info(nfr.host);
console.info(nfr.pathname);
console.info(nfr.searchParams);
console.info(nfr.href);
