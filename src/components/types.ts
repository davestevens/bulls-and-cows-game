import type { SvelteComponent } from 'svelte';

export interface IKeyboardButtonProps {
  label: string;
  icon?: string;
  charCode?: number;
  special?: boolean;
}

export interface ISimpleModalContext {
  open: (NewComponent: typeof SvelteComponent) => void;
  close: () => void;
}
