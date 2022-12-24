<script lang="ts">
  import { onMount } from 'svelte';
  import getLettersPressed from '../services/getLettersPressed';
  import { gameStore } from '../stores/gameStore';

  const LETTER_COUNT = gameStore.getWordLength();
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
    if (event.keyCode === 13) {
      onEnterPressed();
    } else if (event.keyCode === 8) {
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
    position: relative;
  }

  ol:before {
    content: '';
    display: block;
    width: 0.5rem;
    height: 0.5rem;
    position: absolute;
    top: 50%;
    left: -1rem;
    transform: translateY(-50%);

    border: solid black;
    border-width: 0 0.15rem 0.15rem 0;
    display: inline-block;
    transform: rotate(-45deg);
    transform-origin: 0 0;
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
