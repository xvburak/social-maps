<script>
	import { activeSectionId } from '../../../stores.js'
	export let href;
	export let nested;
</script>

<a {href} class:active={`#${$activeSectionId}` === href}>
	<slot></slot>
	
	{#if nested}
		<svelte:self />
	{/if}
</a>

<style>
  a {
        align-items: center;
        text-align: center;
        color: rgb(247, 212, 55);
        text-decoration: none;
        background-color: azure;
        display: none;
        width: 100%;
        height: 10vh;
  }
  a.active {
    display:flex;
    justify-content: center;
  }
</style>