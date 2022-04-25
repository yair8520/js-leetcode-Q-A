setImmediate(() => console.log('I run immediately'))

process.nextTick(() => console.log('But I run before that'))