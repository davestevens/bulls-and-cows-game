import { possible } from '../data/words';

const validateWord = (word: string): boolean => possible.includes(word);

export default validateWord;
