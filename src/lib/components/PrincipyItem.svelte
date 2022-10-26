<script>
    import {
        slide, fade
    } from "svelte/transition";

    export let item
    let isOpen = false
    const toggle = () => isOpen = !isOpen
</script>
    <button class="bg-stone-100 mb-4 p-4 rounded-md w-full" on:click={toggle} aria-expanded={isOpen}>
        <div class="flex justify-between w-full text-stone-800 text-2xl mb-4">
            <p class=" mb-0 ">{item.title}</p>
            {#if isOpen}
                <p class="mb-0">-</p>
            {:else}
                <p class="mb-0">+</p>
            {/if}
            
        </div> 
        <div class="text-stone-500 text-left overflow-hidden text-ellipsis" class:h-12={!isOpen}>
            <p class="mb-0 ">{@html item.text}</p>
        </div>


    </button>