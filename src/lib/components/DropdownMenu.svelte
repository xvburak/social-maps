<script>
    import {
        onMount
    } from 'svelte';
    import {
        scale
    } from 'svelte/transition';

    let show = false; // menu state
    let menu = null; // menu wrapper DOM reference

    onMount(() => {

        const handleOutsideClick = (event) => {
            if (show && !menu.contains(event.target)) {
                show = false;
            }
        };

        const handleEscape = (event) => {
            if (show && event.key === 'Escape') {
                show = false;
            }
        };

        // add events when element is added to the DOM
        document.addEventListener('click', handleOutsideClick, false);
        document.addEventListener('keyup', handleEscape, false);

        // remove events when element is removed from the DOM
        return () => {
            document.removeEventListener('click', handleOutsideClick, false);
            document.removeEventListener('keyup', handleEscape, false);
        };
    });
</script>

<div on:click={()=> (show = !show)} class=" text-stone-400 text-2xl fixed top-6 left-6">
    {#if !show}
    <div class="bg-white p-2 rounded-3xl">
        <div class=""><p>🧭</p></div>
    </div>
    {:else}
    <div class="bg-white flex justify-between space-x-4 p-2 rounded-3xl">
        <div class=""><p>🧭</p></div>
        <div>
            <div class="mb-4">
                <a class="block hover:text-black" href="/#hero">Úvodní stránka</a>
                <a class="block hover:text-black" href="/#about">O aplikaci</a>
                <a class="block hover:text-black" href="/#principy">Základní principy aplikace</a>
                <a class="block hover:text-black" href="/#funkce">Hlavní funkce aplikace</a>
                <a class="block hover:text-black" href="/#contact">Stáhnout</a>
            </div>
            <div class="mb-4">
                <a class="block hover:text-black" href="/">Napiš nám 📧</a>
                <a class="block hover:text-black" href="/#about">Discord 🐽</a>
                <a class="block hover:text-black" href="/#principy">Podpoř nás 💖</a>
            </div>
            <div class="">
                <a class="block hover:text-black" href="/">Switch to English</a>

            </div>
        </div>
    </div>
    {/if}
</div>





<!-- <div on:click={()=> (show = !show)} class="flex bg-white justify-start items-center" bind:this={menu}>
    <div class="flex">
        <button class="menu text-4xl focus:outline-none focus:shadow-solid">🧭</button>
       
        <div
          in:scale={{ duration: 100, start: 0.95 }}
          out:scale={{ duration: 75, start: 0.95 }}
          class="origin-top-left top-[4rem] absolute left-0  p-2 bg-white text-xl leading-none"
        >
            <a class="block p-4" href="/aktualne">Aktuálně</a>
            <a class="block p-4" href="/o-nas">O nás</a>
            <a class="block p-4" href="/fena">Naše fenka</a>
            <a class="block p-4" href="/odchovy">Odchovy</a>
            <a class="block p-4" href="/kontakt">Kontakty</a>
        </div>
    
    </div>
  </div> -->