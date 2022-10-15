// Using a TDD approach, write code to determine the total number of vowels in a phrase.
// Example:
// “I am a Java engineer”
// A – 4
// E - 3
// I - 2
// O - 0
// U – 0

const vowelCounter = (string) => {
  const vowels = {
    A: 0,
    E: 0,
    I: 0,
    O: 0,
    U: 0,
  };

  const letters = Object.keys(vowels);

  letters.forEach((l) => {
    if (string.match(l.toLowerCase())) {
      vowels[l]++;
    }
  });

  return `A - ${vowels.A}\nE - ${vowels.E}\nI - ${vowels.I}\nO - ${vowels.O}\nU - ${vowels.U}`;
};

module.exports = vowelCounter;
