// Code your solutions in this file
function writeCards(names, event) {
  const cards = [];
  for (let i = 0; i < names.length; i++) {
    cards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
  }
  return cards;
}

function countdown(n) {
  let i = n;
  while (i >= 0) {
    console.log(i);
    i--;
  }
}
