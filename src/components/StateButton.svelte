<script lang="ts">
  import Fa from 'svelte-fa';
  import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';
  import { gameStore } from '../stores/gameStore';

  export let isInProgress: boolean;

  const handleReset = () => {
    // eslint-disable-next-line no-alert
    if (!isInProgress || (isInProgress && window.confirm('Reset the game?'))) {
      gameStore.startNewGame();
    }
  };
</script>

<button on:click={handleReset}>
  <Fa icon={faSquarePlus} />
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
    font-size: 1em;
    font-family: inherit;
  }
</style>
