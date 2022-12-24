<script lang="ts">
  import Guesses from './Guesses.svelte';
  import Keyboard from './Keyboard.svelte';
  import { gameStore } from '../stores/gameStore';

  if (!gameStore.isInProgress()) {
    gameStore.startNewGame();
  }
</script>

<main>
  <Guesses />
  <Keyboard />
</main>

<style>
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
</style>
