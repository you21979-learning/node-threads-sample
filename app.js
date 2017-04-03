const spawn = require('threads').spawn;

console.log(process.pid)

class TestThread{
    constructor(){
        this.id = 0;
        this.handle = spawn("./workers/test.js")
            .on('message', (response) => {
                console.log(response.id)
//                console.log('123 * 2 = ', response.result.integer * 2);
            })
            .on('error', (error) => {
                console.error('Worker errored:', error);
            })
            .on('exit', () => {
                console.log('Worker has been terminated.');
            });
    }
    run(){
        this.handle.send({
            string : '123', id:this.id++
        });
    }
    close(){
        this.handle.kill()
    }
}


const main = async () => {
    const t1 = new TestThread();
    const t2 = new TestThread();
    const update = () => {
        t1.run()
        t2.run()
        setTimeout( () => {
            update()
        }, 0)
    }
    update()
}

main()
