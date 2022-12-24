import type Guess from './Guess';
import getRandomWord from './getRandomWord';
import validateWord from './validateWord';
import {
  GameState, IGameState, IGuessResult, IKeyResults,
} from './types';
import buildGuesses from './buildGuesses';
import { GUESS_COUNT, WORD_LENGTH } from './consts';

class Game {
  public get word(): string { return this.currentWord; }

  public get isComplete(): boolean { return this.isCorrect || this.isIncorrect; }

  public get isInProgess(): boolean { return this.state === GameState.InProgress; }

  public get isCorrect(): boolean { return this.state === GameState.CompleteCorrect; }

  public get isIncorrect(): boolean { return this.state === GameState.CompleteIncorrect; }

  public get guessesRemaining(): number { return GUESS_COUNT - this.guessesTaken; }

  public get guessesTaken(): number { return this.guessIndex + 1; }

  public get currentGuessIndex(): number { return this.guessIndex; }

  public get previousGuesses(): IGuessResult[][] {
    return this.guesses.map((guess) => guess.result);
  }

  public get keyResults(): IKeyResults {
    return this.calculateKeyResults();
  }

  // eslint-disable-next-line class-methods-use-this
  public get guessMaxCount(): number { return GUESS_COUNT; }

  // eslint-disable-next-line class-methods-use-this
  public get wordLength(): number { return WORD_LENGTH; }

  private currentWord: string;

  private guessIndex: number;

  private guesses: Guess[] = buildGuesses(GUESS_COUNT);

  private state: GameState = GameState.Unknown;

  public startNew(): void {
    // TODO: close down current game (if there is one)
    this.currentWord = getRandomWord();
    this.guessIndex = 0;
    this.guesses = buildGuesses(GUESS_COUNT);
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
    const guess = this.guesses[this.guessIndex];
    guess.perform(uppercaseInput, this.currentWord);
    if (guess.isCorrect) {
      this.state = GameState.CompleteCorrect;
    } if (this.guessesTaken >= GUESS_COUNT) {
      this.state = GameState.CompleteIncorrect;
    }
    this.guessIndex += 1;
    return this.isComplete;
  }

  public toJson(): IGameState {
    return {
      word: this.currentWord,
      state: this.state,
      guesses: this.guesses.map((guess) => guess.word),
      guessIndex: this.guessIndex,
    };
  }

  public fromJson(state: IGameState): void {
    this.currentWord = state.word;
    this.state = state.state;
    this.guessIndex = state.guessIndex;
    this.guesses = buildGuesses(GUESS_COUNT);
    state.guesses.forEach((guess, index) => {
      if (guess) {
        this.guesses[index].perform(guess, this.currentWord);
      }
    });
  }

  private calculateKeyResults(): IKeyResults {
    const correctPositions = new Set<string>();
    const correctLetters = new Set<string>();
    this.guesses.forEach((guess) => {
      guess.result.forEach((result) => {
        if (result.correctPosition) {
          correctPositions.add(result.letter);
        }
        if (result.correctLetter) {
          correctLetters.add(result.letter);
        }
      });
    });
    return {
      correctPositions: [...correctPositions],
      correctLetters: [...correctLetters],
    };
  }
}

export default Game;
