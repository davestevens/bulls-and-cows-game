<script lang="ts">
  import { onDestroy } from 'svelte';
  import Guess from './Guess.svelte';
  import Current from './Current.svelte';
  import { gameStore } from '../stores/gameStore';
  import type { IGuessResult } from '../Game/types';

  let guessResults: IGuessResult[][];
  let guessIndex: number;

  const unsubscribe = gameStore.subscribe(() => {
    guessResults = gameStore.getGuesses();
    guessIndex = gameStore.getGuessIndex();
  });

  onDestroy(unsubscribe);
</script>

<section>
  {#each guessResults as result, index}
    {#if index === guessIndex}
      <Current />
    {:else}
      <Guess {result} />
    {/if}
  {/each}
</section>
