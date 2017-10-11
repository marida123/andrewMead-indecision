var nameVar = "Mario";
var nameVar="Ante";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet="Julie";
console.log("nameLet",nameLet);

const nameConst="Frank";
console.log("nameConst",nameConst);

// Block scoping

const fullName="Mario Brnada";
let firstName;
if(fullName){
    firstName=fullName.split(" ")[0];
    console.log(firstName)
}

console.log(firstName);