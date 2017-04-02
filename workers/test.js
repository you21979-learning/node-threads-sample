const x = 100

module.exports = (input, done, progress) => {
console.log(x);
done({ string : input.string, integer : parseInt(input.string) });
}
