import possibleWords from './possibleWords';
import selectionWords from './selectionWords';

export const possible = possibleWords.map((word) => word.toLocaleUpperCase());

export const selection = selectionWords.map((word) => word.toLocaleUpperCase());
