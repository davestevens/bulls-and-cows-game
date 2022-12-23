export interface IGuessResult {
  letter: string;
  correctPosition: boolean;
  correctLetter: boolean;
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
