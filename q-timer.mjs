import timers from "timers/promises";

timers.setTimeout(2000, new Date()).then((data) => {
  console.log(data);
});

for await (const startTime of timers.setInterval(1000, "ignored")) {
  console.log(new Date());
}
