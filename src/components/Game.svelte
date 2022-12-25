<script lang="ts">
  import { onDestroy, getContext } from 'svelte';
  import StateButton from './StateButton.svelte';
  import Guesses from './Guesses.svelte';
  import Keyboard from './Keyboard.svelte';
  import GameOverModal from './GameOverModal.svelte';
  import { gameStore } from '../stores/gameStore';
  import type { IGuessResult, IKeyResults } from '../Game/types';
  import type { ISimpleModalContext } from './types';

  const { open } = getContext<ISimpleModalContext>('simple-modal');

  let guessResults: IGuessResult[][];
  let guessIndex: number;
  let isInProgress: boolean;
  let keyResults: IKeyResults;

  const unsubscribe = gameStore.subscribe(() => {
    guessResults = gameStore.getGuesses();
    guessIndex = gameStore.getGuessIndex();
    isInProgress = gameStore.isInProgress();
    keyResults = gameStore.getKeyResults();

    if (!isInProgress) {
      setTimeout(() => {
        open(GameOverModal);
      }, 0);
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
