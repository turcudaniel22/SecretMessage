let secretMessage = [
  "Learning",
  "is",
  "not",
  "about",
  "what",
  "you",
  "get",
  "easily",
  "the",
  "first",
  "time,",
  "it",
  "is",
  "about",
  "what",
  "you",
  "can",
  "figure",
  "out.",
  "-2015,",
  "Chris",
  "Pine,",
  "Learn",
  "JavaScript",
];

const test = secretMessage.pop();
console.log(secretMessage.length);

secretMessage.push("to", "Program");
console.log(secretMessage);

let index = secretMessage.indexOf("easily");
console.log(index);

let test2 = (secretMessage[7] = "right");
console.log(secretMessage);
secretMessage.shift();

console.log(secretMessage);

secretMessage.unshift("Programming");
console.log(secretMessage);

let know = secretMessage.splice(6, 5, "know");
console.log(know);

console.log(secretMessage.join());
