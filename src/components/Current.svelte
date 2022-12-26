<script lang="ts">
  import { onMount } from 'svelte';
  import { toast } from '@zerodevx/svelte-toast';
  import Fa from 'svelte-fa';
  import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
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
    index = Math.max(0, index - 1);
    letters[index] = '';
  };

  const onEnterPressed = () => {
    try {
      gameStore.guessWord(letters.join(''));
      reset();
    } catch (error) {
      toast.push((error as Error).message);
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
  <div class="indicator">
    <Fa icon={faCircleRight} />
  </div>
  {#each letters as letter, index}
    {#if index === 0}
      <li on:click={reset} on:keydown={reset}>{letter}</li>
    {:else}
      <li>{letter}</li>
    {/if}
  {/each}
</ol>

<style>
  ol {
    list-style: none;
    margin: 0.1rem 0;
    padding: 0;
    position: relative;
  }

  .indicator {
    position: absolute;
    top: 0;
    left: -1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 2.2rem;
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    font-family: inherit;
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
