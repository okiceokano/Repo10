var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};
function myFunction(one, two) {
    lion[one] = two;
    return lion;
}
console.log(myFunction("roar", "roar-roar"));
module.exports = myFunction;