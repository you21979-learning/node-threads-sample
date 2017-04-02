const x = 100
const sleep = require('@you21979/promise-sleep');

const main = async (input, progress) => {
    console.log(x);
    console.log(process.pid);
    console.log("wait 1sec");
    return await sleep(1000);
}

module.exports = (input, done, progress) => {
    main(input, progress).then(() => {
       done({ string : input.string, integer : parseInt(input.string), id:input.id });
    })
}
