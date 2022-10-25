<script>
   import Carousel from 'svelte-carousel'
   import { browser } from '$app/env';

   let carousel; // for calling methods of the carousel instance
  
    const handleNextClick = () => {
        carousel.goToNext()
    }
</script>


<section id="funkce" class="w-full h-screen snap-start bg-yellow-400  text-white">
    <div class="p-8 pt-32 pb-16 text-3xl text-center">
        <p>Existuje nespočet možností jak konkrétní lokaci a místa v ní mapovat. Proto je důležité do procesu tvorby
            zapojit co nejvíce lidí, s nimiž lze navrhovat nové nástroje a funkce, jež nám mohou pomoci mapovat svět co
            nejpestřejším způsobem.</p>
        <p> Z něčeho je ale potřeba vycházet, a proto jsme navrhli základní funkce aplikace, na kterých lze stavět… 🧱
        </p>
    </div>

</section>

<section class="w-full h-screen snap-start bg-purple-500 text-white">
    <div class="pt-32 pb-16 h-full">
        <div class="snap-x mx-auto snap-mandatory h-full flex w-full space-x-4 overflow-scroll">
            <div class="snap-center bg-amber-200 w-[80%] flex-shrink-0 h-full flex items-center justify-center text-8xl">1</div>
            <div class="snap-center bg-teal-200 w-[80%] flex-shrink-0  h-full flex items-center justify-center text-8xl">2</div>
            <div class="snap-center bg-cyan-200 w-[80%] flex-shrink-0 h-full flex items-center justify-center text-8xl">3</div>
            <div class="snap-center bg-fuchsia-200 w-[80%] flex-shrink-0 h-full flex items-center justify-center text-8xl">4</div>
        </div>
    </div>

</section>

<style>
    p {
        @apply mb-4
    }
</style>