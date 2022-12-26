import type { IGuessResult } from './types';

const findIndexOfLetter = (input: string[], letter: string): number[] => {
  let count = 0;
  // eslint-disable-next-line no-plusplus
  return input.map((i) => (i === letter ? count++ : 0));
};

const countLetters = (
  input: string[],
  letter: string,
): number => input.filter((i) => i === letter).length;

class Guess {
  public get word(): string { return this.guessedWord; }

  public get result(): IGuessResult[] { return this.guessedResult; }

  public get isCorrect(): boolean { return this.guessedResult.every((r) => r.correctPosition); }

  private guessedWord: string;

  private guessedResult: IGuessResult[] = [];

  public perform(word: string, targetWord: string): void {
    this.guessedWord = word;
    this.validate(targetWord);
  }

  private validate(targetWord: string): void {
    const targetLetters = targetWord.split('');
    const letters = this.guessedWord.split('');
    const remainingLetters = targetLetters.filter((letter, index) => letter !== letters[index]);
    this.guessedResult = letters.map((letter, index) => ({
      letter,
      correctPosition: letter === targetLetters[index],
      correctLetter: remainingLetters.indexOf(letter) > -1
        && findIndexOfLetter(letters, letter)[index] < countLetters(remainingLetters, letter),
    }));
  }
}

export default Guess;
