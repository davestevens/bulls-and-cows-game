<script lang="ts">
  import Current from './Current.svelte';
  import Guesses from './Guesses.svelte';
</script>

<main>
  <Current />
  <Guesses />
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
