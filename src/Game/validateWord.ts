import words from '../data/words';

const validateWord = (word: string): boolean => words.includes(word);

export default validateWord;
