<script>
    import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import { loop } from 'svelte/internal';

    const options = {
        type: 'loop',
        padding: '15%',
        rewind: true,
        focus: 'center',
        perPage: 1,
        gap: '2rem',
        height: '65vh',
        breakpoints: {
            1000: {
                perPage: 1,
            },
        },
    }
</script>



<section id="funkce" class="w-full h-screen flex items-center pb-16  top-0 bg-yellow-400  text-white">
    <div class="p-8 pt-32 pb-16 text-3xl text-center max-w-screen-lg mx-auto">
        <p>Existuje nespočet možností jak konkrétní lokaci a místa v ní mapovat. Proto je důležité do procesu tvorby
            zapojit co nejvíce lidí, s nimiž lze navrhovat nové nástroje a funkce, jež nám mohou pomoci mapovat svět co
            nejpestřejším způsobem.</p>
        <p> Z něčeho je ale potřeba vycházet, a proto jsme navrhli základní funkce aplikace, na kterých lze stavět… 🧱
        </p>
    </div>

</section>

<!-- <Splide aria-label="My Favorite Images">
    <SplideSlide>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.O-OmVOnOTsGFfDiJK0AdEAHaNL%26pid%3DApi%26h%3D160&f=1&ipt=a35b5a82bc345b3378e387ec7dc14f085f7639b5d16ea83792cefbdcaa1e06dd&ipo=images" alt="Image 1"/>
    </SplideSlide>
    <SplideSlide>
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.O-OmVOnOTsGFfDiJK0AdEAHaNL%26pid%3DApi%26h%3D160&f=1&ipt=a35b5a82bc345b3378e387ec7dc14f085f7639b5d16ea83792cefbdcaa1e06dd&ipo=images" alt="Image 2"/>
    </SplideSlide>
  </Splide> -->

<section class="w-full h-screen bg-purple-500 text-white">
    <div class="pt-32 pb-16 h-full ">
        <div class="h-full bg-stone-100 flex flex-col justify-center">
            <Splide options={ options } aria-label="My Favorite Images">
                <SplideSlide class="bg-blue-400 h-full">
                    <div>
                        
                    </div>
                </SplideSlide>
                <SplideSlide class="bg-green-400">
                    <div class="p-6 md:w-1/2">
                        <h2 class="mb-6">🗺 Trasy</h2>
                        <p>Tato funkce ti umožní poznávat lokace pomocí tras, které jsou rozděleny do mnoha kategorií. Můžeš tak zjistit kam ostatní uživatelé*ky rádi*y chodí, kam je nejvhodnější vyrazit s kočárkem, na bruslích, na kole, do přírody, na vodu, nebo třeba co jiné v daném místě zajímá — trasy vytvořené historičkami, přírodovědci, umělci, architektkami, ekoložkami nebo flanéry… Trasy můžeš tvořit i ty a umožnit tak ostatním poznat nová místa z tvé perspektivy!</p>
                    </div>  
                </SplideSlide>
                <SplideSlide class="bg-amber-400">
                    3
                </SplideSlide>
            </Splide>
        </div>

    </div>

</section>

<style>
    p {
        @apply mb-4
    }
</style>