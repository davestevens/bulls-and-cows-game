interface IGuessResult {
  letter: string;
  correctPosition: boolean;
  correctLetter: boolean;
}

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
  public get isCorrect(): boolean { return this.result.every((r) => r.correctPosition); }

  private word: string;

  private result: IGuessResult[];

  constructor(word: string, targetWord: string) {
    this.word = word;
    this.validate(targetWord);
  }

  private validate(targetWord: string): void {
    const targetLetters = targetWord.split('');
    const letters = this.word.split('');
    this.result = letters.map((letter, index) => ({
      letter,
      correctPosition: letter === targetLetters[index],
      correctLetter: targetLetters.indexOf(letter) > -1
        && findIndexOfLetter(letters, letter)[index] < countLetters(targetLetters, letter),
    }));
  }
}

export default Guess;
