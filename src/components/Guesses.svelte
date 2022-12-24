<script lang="ts">
  import Guess from './Guess.svelte';
  import Current from './Current.svelte';
  import type { IGuessResult } from '../Game/types';

  export let guessResults: IGuessResult[][];
  export let guessIndex: number;
  export let isInProgress: boolean;
</script>

<section>
  {#each guessResults as result, index}
    {#if index === guessIndex && isInProgress}
      <Current />
    {:else}
      <Guess {result} />
    {/if}
  {/each}
</section>

<style>
  section {
    margin-bottom: 1rem;
  }
</style>
