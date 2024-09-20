const cron = require('node-cron');

let times = 0;

cron.schedule('(1-59)/5 * * * * *', () => {
    times++;
    console.log(`${times} Tick at five seconds...` );
});

console.log('Start monitoring....');