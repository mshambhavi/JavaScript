const backpack = {
  name: "greenBackpack",
  volume: 30,
  pocketNum: 5,
  color: "green",
};

const addBackpack = function (backpackNew) {
  const newArticle = document.createElement("article");
  newArticle.innerHTML = `
        <h1>${backpackNew.name}</h1>
        <ul>
            <li>Volume: ${backpackNew.volume}</li>
            <li>Pocket Num: ${backpackNew.pocketNum}</li>
            <li>Colour: ${backpackNew.color}</li>
        </ul>
    `;
  return newArticle;
};

const main = document.querySelector("main");
main.append(addBackpack(backpack));

/* 
FUNCTION - Regular
function doSomething (a, b) {
    //func body
};

FUNCTION - expression
const abc = function (a, c){
    //func body
};

FUNCTION - arrow
const bvg = (a,b) => {
    //func body
    //not hoisted, hence cannot be declared inside an object as it will not know the scope.
    //therefore, this keyword is not defined for arrow functions.
    //if defined in any func, then it takes the most recent scope available.
}; 

*/
