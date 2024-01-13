import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./w-worker.mjs");
const worker2 = new Worker("./w-worker.mjs");

worker1.addListener("message", (message) => {
  console.info(
    `Thread id: ${threadId} receive message ${message} from worker 1`
  );
});
worker2.addListener("message", (message) => {
  console.info(
    `Thread id: ${threadId} receive message ${message} from worker 2`
  );
});

worker1.postMessage(10);
worker2.postMessage(10);

console.info(threadId);
