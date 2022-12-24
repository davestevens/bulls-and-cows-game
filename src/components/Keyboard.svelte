<script lang="ts">
  import KeyboardButton from './KeyboardButton.svelte';
  import { IKeyResults } from '../Game/types';
  import type { IKeyboardButtonProps } from './types';

  export let keyResults: IKeyResults;

  const { correctPositions, correctLetters } = keyResults;

  const rows: IKeyboardButtonProps[][] = [
    [{ label: 'Q' }, { label: 'W' }, { label: 'E' }, { label: 'R' }, { label: 'T' }, { label: 'Y' }, { label: 'U' }, { label: 'I' }, { label: 'O' }, { label: 'P' }],
    [{ label: 'A' }, { label: 'S' }, { label: 'D' }, { label: 'F' }, { label: 'G' }, { label: 'H' }, { label: 'J' }, { label: 'K' }, { label: 'L' }],
    [{ label: '⏎', charCode: 13, special: true }, { label: 'Z' }, { label: 'X' }, { label: 'C' }, { label: 'V' }, { label: 'B' }, { label: 'N' }, { label: 'M' }, { label: '⌫', charCode: 8, special: true }],
  ];

  const checkPosition = (
    letter: IKeyboardButtonProps,
  ): boolean => correctPositions.indexOf(letter.label) > -1;

  const checkLetter = (
    letter: IKeyboardButtonProps,
  ): boolean => correctLetters.indexOf(letter.label) > -1;
</script>

{#key keyResults}
  <section>
    {#each rows as row, index (index)}
      <div class="row">
        {#each row as letter (letter)}
          <KeyboardButton button={letter} correctPosition={checkPosition(letter)} correctLetter={checkLetter(letter)}/>
        {/each}
      </div>
    {/each}
  </section>
{/key}

<style>
  .row {
    margin: 0.2rem 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
</style>
