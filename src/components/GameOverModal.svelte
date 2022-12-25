<script lang="ts">
  import { getContext } from 'svelte';
  import DefinitionButton from './DefinitionButton.svelte';
  import { ISimpleModalContext } from './types';
  import { gameStore } from '../stores/gameStore';

  const { close } = getContext<ISimpleModalContext>('simple-modal');

  const word = gameStore.getWord();
  const isIncorrect = gameStore.isIncorrect();

  const handlePlayAgain = () => {
    gameStore.startNewGame();
    close();
  };
</script>

<template>
  <h3>{isIncorrect ? 'Bad Luck!' : 'Congratulations!'}</h3>
  <p>Word: {word} <DefinitionButton {word} /></p>
  <div>
    <button on:click={handlePlayAgain}>Play again</button>
  </div>
</template>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2.5rem;
    border: 0.1rem solid grey;
    border-radius: 0.3rem;
    background-color: transparent;
    margin: 0 0.15rem;
    font-size: 1rem;
    font-family: inherit;
  }
</style>
