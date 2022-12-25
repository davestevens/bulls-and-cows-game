export interface IDefintion {
  word: string;
  phonetic: string;
  meaning: string;
}

interface IApiResponse {
  word: string;
  phonetic: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
    }[];
  }[];
}

const BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en';

const getDefinition = async (word: string): Promise<IDefintion> => {
  const url = `${BASE_URL}/${word}`;
  const response = await fetch(url);
  try {
    const body = await response.json() as IApiResponse[];
    return {
      word: body[0].word,
      phonetic: body[0].phonetic,
      meaning: body[0].meanings.find((m) => m.partOfSpeech === 'noun').definitions[0].definition,
    };
  } catch {
    return {
      word,
      phonetic: 'Problem fetching definition',
      meaning: 'Problem fetching definition',
    };
  }
};

export default getDefinition;
