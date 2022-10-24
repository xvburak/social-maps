<script>
    import {
        slide
    } from "svelte/transition";

    export let entry
    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>
    <button class="bg-stone-50 mb-4 p-4 rounded-md snap-none" on:click={toggle} aria-expanded={isOpen}>
        <div class="flex justify-between w-full text-stone-800 text-2xl mb-4">
            <p class=" mb-0 ">{entry.header}</p>
            <p class="mb-0">＋</p>
        </div> 
        <div class="text-stone-500 text-left">
            <p class="mb-0">{entry.content}</p>
        </div>
        {#if isOpen}
        <div class="text-stone-500 text-left" transition:slide={{ duration: 300 }}>
            <p class="mb-0">{entry.content}</p>
        </div>
        {/if}
    </button>

 

<style>
	svg { 
        transition: transform 0.01s ease-in;
    }
	[aria-expanded=true] 
    svg { 
        transform: rotate(0.25turn); 
        }
</style>