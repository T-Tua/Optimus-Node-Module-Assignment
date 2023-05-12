// events: Provides an event-driven architecture to handle events and triggers.

const events = require("events");
const emitter = new events.EventEmitter();
emitter.on("hello", (name) => {
	console.log(`Hello, ${name}!`);
});
emitter.emit("hello", "world");
