import words from '../data/words';

const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLocaleUpperCase();
};

export default getRandomWord;
