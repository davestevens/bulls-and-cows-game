<script lang="ts">
  import { getContext } from 'svelte';
  import DefinitionModal from './DefinitionModal.svelte';
  import type { ISimpleModalContext } from './types';

  const { open } = getContext<ISimpleModalContext>('simple-modal');
  
  export let word: string;

  const handleClick = () => {
    open(DefinitionModal, { word });
  };
</script>

<button on:click={handleClick}>
  🔍
</button>

<style>
  button {
    display: inline-block;
    width: 1.5rem;
    height: 2.2rem;
    border: none;
    background-color: transparent;
    margin: 0;
    padding: 0;
    font-size: 0.75rem;
    font-family: inherit;
  }
</style>
