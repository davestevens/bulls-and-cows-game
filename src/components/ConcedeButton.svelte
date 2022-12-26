<script lang="ts">
  import Fa from 'svelte-fa';
  import { faFlag } from '@fortawesome/free-regular-svg-icons';
  import { gameStore } from '../stores/gameStore';

  export let isInProgress: boolean;

  const handleConcede = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Give up?')) {
      gameStore.concede();
    }
  };
</script>

<button on:click={handleConcede} disabled={!isInProgress}>
  <Fa icon={faFlag} />
</button>

<style>
  button {
    position: absolute;
    top: 2.35rem;
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
