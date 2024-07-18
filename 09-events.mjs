import { EventEmitter } from "events";

const emitter = new EventEmitter();

emitter.addListener("say", (name) => {
  console.log(name);
});

emitter.emit("say", "Narendra");
