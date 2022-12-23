import wordList from '../data/wordList';

const getRandomWord = (): string => {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex].toLocaleUpperCase();
};

export default getRandomWord;
