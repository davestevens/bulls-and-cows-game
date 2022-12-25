<script lang="ts">
  import { SvelteToast } from '@zerodevx/svelte-toast';
  import Modal from 'svelte-simple-modal';
  import Game from './components/Game.svelte';
</script>

<SvelteToast />
<Modal>
  <Game />
</Modal>
