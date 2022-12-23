<script lang="ts">
  import { onMount } from 'svelte';
  import getLettersPressed from '../services/getLettersPressed';
  import { gameStore } from '../stores/gameStore';

  const LETTER_COUNT = 5;
  const letters: string[] = new Array<string>(LETTER_COUNT).fill('');
  let index = 0;

  const reset = () => {
    for (let i = 0; i < LETTER_COUNT; i += 1) {
      letters[i] = '';
    }
    index = 0;
  };

  const onLetterPressed = (letter: string) => {
    if (index < LETTER_COUNT) {
      letters[index] = letter;
      index += 1;
    }
  };

  const onBackspacePressed = () => {
    index -= 1;
    letters[index] = '';
  };

  const onEnterPressed = () => {
    if (index === LETTER_COUNT) {
      gameStore.guessWord(letters.join(''));
      reset();
    } else {
      console.log('not enough letters');
    }
  };

  const keyPressListener = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      onEnterPressed();
    } else if (event.key === 'Backspace') {
      onBackspacePressed();
    }
  };

  onMount(() => {
    const clearLetterPressedListener = getLettersPressed(onLetterPressed);
    window.addEventListener('keydown', keyPressListener);

    return () => {
      clearLetterPressedListener();
      window.removeEventListener('keydown', keyPressListener);
    };
  });
</script>

<ol>
  {#each letters as letter}
    <li>{letter}</li>
  {/each}
</ol>

<style>
  ol {
    list-style: none;
    margin: 0.1rem 0;
    padding: 0;
  }

  li {
    display: inline-block;
    width: 1.5rem;
    height: 2rem;
    border: 0.1rem solid grey;
    margin: 0 0.1rem;
    text-align: center;
    line-height: 2rem;
    vertical-align: middle;
  }
</style>
