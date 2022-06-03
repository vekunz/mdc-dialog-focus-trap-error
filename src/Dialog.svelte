<svelte:options accessors/>

<script>
  import { MDCDialog } from '@material/dialog';
  import { createEventDispatcher, onMount } from 'svelte';

  export let dataTestId = undefined;

  let dialogElement;
  let dialog;

  const dispatch = createEventDispatcher();

  export const open = () => dialog.open();
  export const close = (action) => dialog.close(action);

  onMount(() => {
    dialog = new MDCDialog(dialogElement);
    dialog.listen('MDCDialog:opening', () => dispatch('Dialog:opening'));
    dialog.listen('MDCDialog:opened', () => dispatch('Dialog:opened'));
    dialog.listen('MDCDialog:closing', evt => dispatch('Dialog:closing', evt.detail));
    dialog.listen('MDCDialog:closed', evt => dispatch('Dialog:closed', evt.detail));
  });
</script>

<div class="mdc-dialog" bind:this={dialogElement} data-testid={dataTestId}>
  <div class="mdc-dialog__container">
    <div class="mdc-dialog__surface"
         role="alertdialog"
         aria-modal="true">
     <slot />
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>
