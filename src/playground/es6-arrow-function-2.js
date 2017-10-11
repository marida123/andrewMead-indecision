//arguments object-no longer bound with arrow functions

const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(55, 1));



//this keyword-no longer bound

const user = {
    name: "Mario",
    cities: ["Berlin", "Prozor", "Bugojno"],
    printPlacesLived() {

        return this.cities.map((city) => this.name + " has lived in " + city);


    }
};

console.log(user.printPlacesLived());


const multiplier = {
    numbers: [1, 5, 8, 10, 22],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};

console.log(multiplier.multiply());