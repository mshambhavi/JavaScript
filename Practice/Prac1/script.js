import Bottle from "./Bottle.js";

const newBottle = new Bottle(
    "Black",
    "Round",
    false,
    true,
    10,
    5
)

console.log(newBottle);
console.log(newBottle.colour);
console.log(newBottle["isEmpty"]);