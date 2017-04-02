const spawn = require('threads').spawn;

console.log(process.pid)

const run = async (t,id) => {
    t
        .send({ string : '123', id:id })
/*
        .on('error', (error) => {
            console.error('Worker errored:', error);
        })
        .on('exit', () => {
            console.log('Worker has been terminated.');
        });
*/
}


const main = async () => {
    const thread = spawn("./workers/test.js")
        .on('message', (response) => {
            console.log(response.id)
            console.log('123 * 2 = ', response.integer * 2);
//            t.kill();
        })
    run(thread,1)
    run(thread,2)
    run(thread,3)
    run(thread,4)
    run(thread,5)
    run(thread,6)
}

main()
