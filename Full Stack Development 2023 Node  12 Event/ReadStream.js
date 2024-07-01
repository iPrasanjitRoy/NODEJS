const fs = require('fs');

/* Create A ReadStream For 'Data.json' */
const rr = fs.createReadStream('./Data.json');

/* Event Listener For 'Data' Event */
rr.on('data', (mychunk) => {
    console.log(`Received ${mychunk.length} Bytes Of Data.`);
    console.log(mychunk);
    //console.log(chunk.toString()); /*  Convert The Buffer To String And Log The Data */
});

/*  Event Listener For 'End' Event */
rr.on('end', () => {
    console.log('No More Data To Read.');
});

/* Event Listener For 'error' Event (Handle Errors) */
rr.on('error', (err) => {
    console.error('Error:', err);
}); 