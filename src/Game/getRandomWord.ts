import { selection } from '../data/words';

const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * selection.length);
  return selection[randomIndex].toLocaleUpperCase();
};

export default getRandomWord;
