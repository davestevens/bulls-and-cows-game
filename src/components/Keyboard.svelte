<script lang="ts">
  import KeyboardButton, { IButtonProps } from './KeyboardButton.svelte';

  const rows: IButtonProps[][] = [
    [{ label: 'Q' }, { label: 'W' }, { label: 'E' }, { label: 'R' }, { label: 'T' }, { label: 'Y' }, { label: 'U' }, { label: 'I' }, { label: 'O' }, { label: 'P' }],
    [{ label: 'A' }, { label: 'S' }, { label: 'D' }, { label: 'F' }, { label: 'G' }, { label: 'H' }, { label: 'J' }, { label: 'K' }, { label: 'L' }],
    [{ label: '⏎', charCode: 13, special: true }, { label: 'Z' }, { label: 'X' }, { label: 'C' }, { label: 'V' }, { label: 'B' }, { label: 'N' }, { label: 'M' }, { label: '⌫', charCode: 8, special: true }],
  ];
</script>

<section>
  {#each rows as row, index (index)}
    <div class="row">
      {#each row as letter (letter)}
        <KeyboardButton button={letter} />
      {/each}
    </div>
  {/each}
</section>

<style>
  .row {
    margin: 0.2rem 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
</style>
