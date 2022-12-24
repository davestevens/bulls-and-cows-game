export interface IGuessResult {
  letter: string;
  correctPosition: boolean;
  correctLetter: boolean;
}

export interface IKeyResults {
  correctPositions: string[];
  correctLetters: string[];
  incorrectLetters: string[];
}

export enum GameState {
  Unknown,
  InProgress,
  CompleteCorrect,
  CompleteIncorrect,
}

export interface IGameState {
  word: string;
  state: GameState;
  guesses: string[];
  guessIndex: number;
}
