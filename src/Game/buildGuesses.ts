import Guess from './Guess';

const buildGuesses = (count: number): Guess[] => {
  const guesses: Guess[] = [];
  for (let i = 0; i < count; i += 1) {
    guesses.push(new Guess());
  }
  return guesses;
};

export default buildGuesses;
