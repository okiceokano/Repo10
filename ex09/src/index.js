function myFunction(myObj, checkProp) {
    var testno = {
        title: "Titanic",
        song: "My Heart Will Go On",
        genre: "drama"
    };
    testno.hasOwnProperty(checkProp);
    myObj = testno[checkProp];

    if (testno.hasOwnProperty(checkProp) === true) {
        return myObj;
    } else {
        return "Not Found";
    }

}
//myFunction({title: "Titanic", song: "My Heart Will Go On", genre: "drama"}, "title");
module.exports = myFunction;