export type GetLettersPressedCallback = (letter: string) => void;

const buildKeyPressListener = (callback: GetLettersPressedCallback) => (event: KeyboardEvent) => {
  const { keyCode } = event;
  if ((keyCode >= 65 && keyCode <= 90)) {
    callback(event.key.toLocaleUpperCase());
  }
};

const getLettersPressed = (callback: GetLettersPressedCallback): () => void => {
  const keyPressListener = buildKeyPressListener(callback);
  window.addEventListener('keydown', keyPressListener);
  return () => {
    window.removeEventListener('keydown', keyPressListener);
  };
};

export default getLettersPressed;
