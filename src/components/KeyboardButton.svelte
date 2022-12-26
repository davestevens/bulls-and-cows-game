<script lang="ts">
  import Fa from 'svelte-fa';
  import type { IKeyboardButtonProps } from './types';

  export let button: IKeyboardButtonProps;
  export let correctPosition: boolean;
  export let correctLetter: boolean;
  export let incorrectLetter: boolean;

  const handleClick = () => {
    const keyCode = button.charCode ?? button.label.charCodeAt(0);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: button.label, keyCode }));
  };
</script>

<button on:click={handleClick} class:special={button.special} class:position={correctPosition} class:letter={correctLetter} class:incorrect={incorrectLetter}>
  {#if button.icon}
    <Fa icon={button.icon} />
  {:else}
    {button.label}
  {/if}
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 2.5rem;
    border: 0.1rem solid grey;
    border-radius: 0.3rem;
    background-color: transparent;
    margin: 0 0.15rem;
    font-size: 1rem;
    font-family: inherit;
  }

  button.special {
    width: 2.5rem;
  }

  button.incorrect {
    background-color: darkgray;
  }

  button.letter {
    background-color: orange;
  }

  button.position {
    background-color: green;
    color: #ffe;
  }
</style>
