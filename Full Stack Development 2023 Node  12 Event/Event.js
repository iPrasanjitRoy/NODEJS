const EventEmitter = require('events');
const fs = require('fs');

/*  Create A Readstream For 'Data.json' */
const rr = fs.createReadStream('./Data.json');

/* EVENT LISTENER FOR 'DATA' EVENT */
rr.on('data', (data) => {
    console.log({ data });
});

/* EVENT LISTENER FOR 'END' EVENT */
rr.on('end', (data) => {
    console.log("No More Data", { data });
});

const em = new EventEmitter()

/* EVENT LISTENER FOR 'DEMO' EVENT */
em.on('Demo', (emitdata) => {
    console.log('Demo', emitdata)
})

/* EMITTING 'DEMO' EVENT AFTER A DELAY */
setTimeout(() => {
    em.emit('Demo', { name: 'Dummy' });
}, 5000)