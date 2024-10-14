let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function excusegenerator() {
  let randomwho = who[Math.floor(Math.random() * who.length)];
  let randomaction = action[Math.floor(Math.random() * action.length)];
  let randomwhat = what[Math.floor(Math.random() * action.length)];
  let randomwhen = when[Math.floor(Math.random() * action.length)];

  return `${randomwho} ${randomaction} ${randomwhat} ${randomwhen}`;
}
function setExcuse() {
document.getElementById("randomphrases").innerText = excusegenerator();}
