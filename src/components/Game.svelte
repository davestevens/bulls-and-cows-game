<script lang="ts">
  import { onDestroy } from 'svelte';
  import { toast } from '@zerodevx/svelte-toast';
  import StateButton from './StateButton.svelte';
  import Guesses from './Guesses.svelte';
  import Keyboard from './Keyboard.svelte';
  import { gameStore } from '../stores/gameStore';
  import type { IGuessResult, IKeyResults } from '../Game/types';

  let guessResults: IGuessResult[][];
  let guessIndex: number;
  let isInProgress: boolean;
  let keyResults: IKeyResults;

  const unsubscribe = gameStore.subscribe(() => {
    guessResults = gameStore.getGuesses();
    guessIndex = gameStore.getGuessIndex();
    isInProgress = gameStore.isInProgress();
    keyResults = gameStore.getKeyResults();

    if (gameStore.isIncorrect()) {
      toast.push(`The word was "${gameStore.getWord()}"`);
    }
  });

  onDestroy(unsubscribe);
</script>

{#key guessIndex}
  <main>
    <div class="container">
      <StateButton {isInProgress} />
      <Guesses {guessResults} {guessIndex} {isInProgress} />
    </div>
    <Keyboard {keyResults} />
  </main>
{/key}

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .container {
    position: relative;
  }
</style>
