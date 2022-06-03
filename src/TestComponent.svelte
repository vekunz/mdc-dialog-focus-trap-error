<svelte:options accessors/>

<script>
  export let component;
  export let slot;
  export let properties;

  export let child;
</script>

<svelte:component bind:this={child} this={component} {...properties}>
  {#if typeof slot === 'function'}
    <svelte:component this={slot}></svelte:component>
  {:else}
    {@html slot}
  {/if}
</svelte:component>
