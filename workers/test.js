const x = 100
const sleep = require('@you21979/promise-sleep');

const main = async (input, progress) => {
    console.log(x);
    console.log(process.pid);
    console.log("wait 1sec");
    await sleep(1000);
    return { string : input.string, integer : parseInt(input.string), id:input.id }
}

module.exports = (input, done, progress) => {
    main(input, progress).then(res => {
       done({
           id : input.id,
           result : res,
           status : 1,
       });
    }).catch(e => {
       done({
           id : input.id,
           error : e,
           status : 0,
       });
    })
}
