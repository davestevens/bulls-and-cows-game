<script lang="ts">
  import { onDestroy } from 'svelte';
  import Guesses from './Guesses.svelte';
  import Keyboard from './Keyboard.svelte';
  import { gameStore } from '../stores/gameStore';
  import type { IGuessResult, IKeyResults } from '../Game/types';

  let guessResults: IGuessResult[][];
  let guessIndex: number;
  let isInProgress: boolean;
  let keyResults: IKeyResults;

  if (!gameStore.isInProgress()) {
    gameStore.startNewGame();
  }

  const unsubscribe = gameStore.subscribe(() => {
    guessResults = gameStore.getGuesses();
    guessIndex = gameStore.getGuessIndex();
    isInProgress = gameStore.isInProgress();
    keyResults = gameStore.getKeyResults();
  });

  onDestroy(unsubscribe);
</script>

{#key guessIndex}
  <main>
    <Guesses {guessResults} {guessIndex} {isInProgress} />
    <Keyboard {keyResults} />
  </main>
{/key}

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
