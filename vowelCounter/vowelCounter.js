// Using a TDD approach, write code to determine the total number of vowels in a phrase.
// Example:
// “I am a Java engineer”
// A – 4
// E - 3
// I - 2
// O - 0
// U – 0

const vowelCounter = (string) => {
  const input = string.toLowerCase().split("");
  const vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  };

  const letters = Object.keys(vowels);

  letters.forEach((l) => {
    let letterCount = input.filter((x) => {
      return x == l.toLowerCase();
    });
    if (letterCount) {
      vowels[l] = letterCount.length;
    }
  });

  return `A - ${vowels.A}\nE - ${vowels.E}\nI - ${vowels.I}\nO - ${vowels.O}\nU - ${vowels.U}`;
};

module.exports = vowelCounter;
