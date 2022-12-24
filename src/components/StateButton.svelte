<script lang="ts">
  import { gameStore } from '../stores/gameStore';

  export let isInProgress: boolean;

  const handleReset = () => {
    gameStore.startNewGame();
  };
</script>

<button on:click={handleReset}>
  {#if isInProgress}
    🔄
  {:else}
    🆕
  {/if}
</button>

<style>
  button {
    position: absolute;
    left: 100%;
    margin-left: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    border: none;
    background-color: transparent;
    font-size: 2em;
    font-family: inherit;
  }
</style>
