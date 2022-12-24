<script lang="ts">
  import { gameStore } from '../stores/gameStore';

  export let isInProgress: boolean;

  const handleReset = () => {
    gameStore.startNewGame();
  };
</script>

<button on:click={handleReset}>
  {#if isInProgress}
    Reset
  {:else}
    New Game
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
    width: 3rem;
    height: 3rem;
    border: 0.1rem solid grey;
    border-radius: 0.3rem;
    background-color: transparent;
  }
</style>
