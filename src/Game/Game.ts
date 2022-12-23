import Guess from './Guess';
import getRandomWord from './getRandomWord';
import validateWord from './validateWord';

const GUESS_COUNT = 5;
const WORD_LENGTH = 5;

enum GameState {
  Unknown,
  InProgress,
  CompleteCorrect,
  CompleteIncorrect,
}

class Game {
  public get word(): string { return this.currentWord; }

  public get isComplete(): boolean { return this.isCorrect || this.isIncorrect; }

  public get isInProgess(): boolean { return this.state === GameState.InProgress; }

  public get isCorrect(): boolean { return this.state === GameState.CompleteCorrect; }

  public get isIncorrect(): boolean { return this.state === GameState.CompleteIncorrect; }

  public get guessesRemaining(): number { return GUESS_COUNT - this.guessesTaken; }

  public get guessesTaken(): number { return this.guesses.length; }

  private currentWord: string;

  private guesses: Guess[];

  private state: GameState = GameState.Unknown;

  public startNew(): void {
    // TODO: close down current game (if there is one)
    this.currentWord = getRandomWord();
    this.guesses = [];
    this.state = GameState.InProgress;
  }

  public makeGuess(input: string): boolean {
    const uppercaseInput = input.toLocaleUpperCase();
    if (!this.isInProgess) {
      throw new Error('Trying to guess when game is not in progress');
    }
    if (uppercaseInput.length !== WORD_LENGTH) {
      throw new Error('Invalid word length');
    }
    if (!validateWord(uppercaseInput)) {
      throw new Error('Not a valid word');
    }
    const guess = new Guess(uppercaseInput, this.currentWord);
    this.guesses.push(guess);
    if (guess.isCorrect) {
      this.state = GameState.CompleteCorrect;
    } else if (this.guesses.length >= GUESS_COUNT) {
      this.state = GameState.CompleteIncorrect;
    }
    return this.isComplete;
  }
}

export default Game;
