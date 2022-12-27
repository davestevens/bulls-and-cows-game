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
    const guessedLetter = this.guessedWord.split('');
    const remainingLetters = targetLetters.filter((l, i) => l !== guessedLetter[i]);
    const incorrectLetters = guessedLetter.map((l, i) => (l === targetLetters[i] ? null : l));
    this.guessedResult = guessedLetter.map((l, i) => ({
      letter: l,
      correctPosition: l === targetLetters[i],
      correctLetter: remainingLetters.indexOf(l) > -1
        && findIndexOfLetter(incorrectLetters, l)[i] < countLetters(remainingLetters, l),
    }));
  }
}

export default Guess;
