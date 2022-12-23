<script lang="ts">
  import type { IGuessResult } from '../Game/types';

  const results: IGuessResult = [
    {
      letter: 'a',
      correctPosition: true,
      correctLetter: true,
    },
    {
      letter: 'b',
      correctPosition: true,
      correctLetter: false,
    },
    {
      letter: 'c',
      correctPosition: false,
      correctLetter: true,
    },
    {
      letter: 'd',
      correctPosition: false,
      correctLetter: false,
    }, {
      letter: 'e',
      correctPosition: false,
      correctLetter: false,
    },
  ];
</script>

<ol>
  {#each results as result}
    <li data-position={result.correctPosition} data-letter={result.correctLetter}>{result.letter}</li>
  {/each}
</ol>

<style>
  ol {
    list-style: none;
    margin: 0.1rem 0;
    padding: 0;
  }

  li {
    display: inline-block;
    width: 1.5rem;
    height: 2rem;
    border: 0.1rem solid grey;
    margin: 0 0.1rem;
    text-align: center;
    line-height: 2rem;
  }

  li[data-letter="true"] {
    background-color: orange;
  }

  li[data-position="true"] {
    background-color: green;
  }
</style>
