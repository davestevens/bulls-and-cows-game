<script lang="ts">
  import type { IKeyboardButtonProps } from './types';

  export let button: IKeyboardButtonProps;
  export let correctPosition: boolean;
  export let correctLetter: boolean;

  const handleClick = () => {
    const keyCode = button.charCode ?? button.label.charCodeAt(0);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: button.label, keyCode }));
  };
</script>

<button on:click={handleClick} class:special={button.special} class:position={correctPosition} class:letter={correctLetter}>
  {button.label}
</button>

<style>
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 2rem;
    border: 0.1rem solid grey;
    border-radius: 0.3rem;
    background-color: transparent;
    margin: 0 0.1rem;
    font-size: 1rem;
    font-family: inherit;
  }

  button.special {
    width: 2.5rem;
  }

  button.letter {
    background-color: orange;
  }

  button.position {
    background-color: green;
    color: #ffe;
  }
</style>
