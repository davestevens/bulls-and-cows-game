<script lang="ts">
  import { onMount } from 'svelte';
  import getDefinition from '../services/getDefinition';
  import type { IDefintion } from '../services/getDefinition';

  export let word: string;
  let loading = true;
  let definition: IDefintion;

  onMount(async () => {
    loading = true;
    definition = await getDefinition(word);
    loading = false;
  });
</script>

<template>
  <h3>{word}</h3>
  {#if loading}
    Loading
  {:else}
    <strong>{definition.phonetic}</strong>
    <p>{definition.meaning}</p>
  {/if}
</template>
