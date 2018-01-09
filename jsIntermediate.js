// Name: Vince Carini

/*
Part I
Create a function called starString() that takes a number and returns a string of that many *. 
*/
console.log("Starting Part I");
function starString(numberOfStars) {
  let starString = "";
  for (let i = 0; i < numberOfStars; i++) {
    starString = starString + "*";
  }
  return starString;
}

let stars = starString(8);

console.log(stars);
console.log();
/*
Part II
Create a function called drawStars() that takes an array of numbers 
and prints out *.
*/
console.log("Starting Part II");
function drawStars(array) {
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      let buildString = "";
      let firstCharacter = array[i].toLowerCase()[0];
      for (let j = 0; j < array[i].length; j++) {
        buildString = buildString + firstCharacter;
      }
      console.log(buildString);
    } else {
      console.log(starString(array[i]));
    }
  }
  return;
}




let x = [4, 6, 1, 3, 5, 7, 25];

drawStars(x);
console.log();

/*
Part III
Modify the function above. Allow an array containing integers and strings 
to be passed to the drawStars() function. When a string is passed, instead 
of displaying *, display the first letter of the string according to the 
example below. You may use the .toLowerCase() string method for this part.
*/
console.log("Starting Part III");
let y = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

drawStars(y);
