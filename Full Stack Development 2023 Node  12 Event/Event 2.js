const EventEmitter = require('events');

/* Create An Instance Of Event Emitter */
const myEmitter = new EventEmitter();

/* Event Listener For 'Greet' Event */
myEmitter.on('greet', () => {
    console.log('Hello, World!');
});

/* Emit The 'Greet' Event */
myEmitter.emit('greet');

