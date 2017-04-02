const spawn = require('threads').spawn;

const thread = spawn("./workers/test.js")

console.log(process.pid)

thread
  .send({ string : '123' })
  .on('message', (response) => {
    console.log('123 * 2 = ', response.integer * 2);
    thread.kill();
  })
  .on('error', (error) => {
    console.error('Worker errored:', error);
  })
  .on('exit', () => {
    console.log('Worker has been terminated.');
  });
