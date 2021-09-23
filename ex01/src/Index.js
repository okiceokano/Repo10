var myPet = {
    species: "maca",
    name: "rifet",
    legs: 4,
    friends: ["riki", "mici"]
};
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };