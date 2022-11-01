const EventEmitter = require('events');

let eventEmitter = new EventEmitter();

let EventHandler = ()=>{
	console.log("Hello from event loop");
}

eventEmitter.on('event1', EventHandler);

eventEmitter.emit("event1");
