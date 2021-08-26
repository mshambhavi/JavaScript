function doSomeMath(a, b) {
  let c = a * b;
  return c;
}

console.log(doSomeMath(2, 3));

const doMoreMath = function (a, b) {
  let d = a * b;
  return d;
};

console.log(doMoreMath(5, 6));

const abc = function (a, b) {
  let e = a + b;
  return e;
};
console.log(abc(5, 6));

(function () {
  let a = 2;
  let b = 3;
  let f = a * b;
  console.log(f);
})();
