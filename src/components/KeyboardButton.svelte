<script lang="ts">
  export interface IButtonProps {
    label: string;
    charCode?: number;
    special?: boolean;
  }

  export let button: IButtonProps;

  const handleClick = () => {
    const keyCode = button.charCode ?? button.label.charCodeAt(0);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: button.label, keyCode }));
  };
</script>

<button on:click={handleClick} class:special={button.special}>
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
  }

  button.special {
    width: 2.5rem;
  }
</style>
