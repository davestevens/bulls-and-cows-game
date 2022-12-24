import { writable } from 'svelte/store';
import { GAME_KEY } from '../Game/consts';
import Game from '../Game/Game';
import type { IGameState, IGuessResult, IKeyResults } from '../Game/types';

const game = new Game();

export const createGameStore = () => {
  const initialValue = JSON.parse(localStorage.getItem(GAME_KEY)) as IGameState;
  if (initialValue) {
    game.fromJson(initialValue);
  }
  const { update, subscribe } = writable<IGameState>(game.toJson());

  subscribe((val) => {
    localStorage.setItem(GAME_KEY, JSON.stringify(val));
  });

  return {
    subscribe,
    isInProgress: (): boolean => game.isInProgess,
    isIncorrect: (): boolean => game.isIncorrect,
    startNewGame: () => {
      game.startNew();
      update(() => game.toJson());
    },
    guessWord: (word: string) => {
      game.makeGuess(word);
      update(() => game.toJson());
    },
    getWord: (): string => game.word,
    getGuesses: (): IGuessResult[][] => game.previousGuesses,
    getGuessIndex: (): number => game.currentGuessIndex,
    getGuessMaxCount: (): number => game.guessMaxCount,
    getWordLength: (): number => game.wordLength,
    getKeyResults: (): IKeyResults => game.keyResults,
  };
};

export const gameStore = createGameStore();
