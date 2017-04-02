const x = 100

module.exports = (input, done, progress) => {
    console.log(x);
    console.log(process.pid);
    done({ string : input.string, integer : parseInt(input.string) });
}
