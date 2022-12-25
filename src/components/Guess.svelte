<script lang="ts">
  import type { IGuessResult } from '../Game/types';
  import { gameStore } from '../stores/gameStore';
  import DefinitionButton from './DefinitionButton.svelte';

  export let result: IGuessResult[];

  const wordLength = gameStore.getWordLength();
</script>

<ol>
  {#if result.length}
    <DefinitionButton word={result.map((i) => i.letter).join('')} />
  {/if}
  {#each result as item}
    <li data-position={item.correctPosition} data-letter={item.correctLetter}>{item.letter}</li>
  {:else}
    {#each Array(wordLength) as _, i}
      <li></li>
    {/each}
  {/each}
</ol>

<style>
  ol {
    list-style: none;
    margin: 0.1rem 0;
    padding: 0;
    position: relative;
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

  li[data-letter="true"] {
    background-color: orange;
  }

  li[data-position="true"] {
    background-color: green;
    color: #ffe;
  }
</style>
