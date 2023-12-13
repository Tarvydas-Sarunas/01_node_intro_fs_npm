"use strict";
console.log("node-intro.js file was loaded");

function sum(sk1, sk2) {
  console.log(sk1 + sk2);
}
sum(15, 45);

function getAvg(arr) {
  let sum = 0;
  arr.forEach((element) => (sum += element));
  return sum / arr.length;
}

const avg = getAvg([1, 2, 3]);
console.log(avg);
