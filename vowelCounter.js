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

  if (string.match("a")) {
    vowels.A++;
  }

  return `A - ${vowels.A}\nE - 0\nI - 0\nO - 0\nU - 0`;
};

module.exports = vowelCounter;
