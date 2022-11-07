<script>
    import { page } from '$app/stores';
    import "../app.css";
    import '@splidejs/svelte-splide/css/core';
    import ActionBar from "$lib/components/ActionBar.svelte";


</script>
  

    <slot />

    <!-- {#if $page.url.pathname === '/'}
        <ActionBar link='#contact' copy='boo' />
    {:else}
        <ActionBar link='#contact' copy='bar' />
    {/if}
     -->

    <!-- 
    hero
    about
    principy
    funkce
    contact
    

    
    
    -->