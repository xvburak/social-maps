<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import PrincipySection from "$lib/components/PrincipySection.svelte";
    import FunctionSection from "$lib/components/FunctionSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";

    export let data
    // console.log(data.items)
</script>

<main class="max-h-screen overflow-y-scroll scroll-smooth">
    <HeroSection />
    <AboutSection />
    <PrincipySection stuff={data.items} />
    <FunctionSection />
    <ContactSection />

    <!-- <section class="w-full h-screen snap-start bg-indigo-200">Section 4</section>
    <section class="w-full h-screen snap-start bg-yellow-200">Section 5</section> -->
</main>

<style>
    main {
        overflow-y: scroll;
        scroll-snap-type: y proximity;
    }
</style>





<!-- <div class="hero bg-stone-200 h-[92vh]">
    <h1 class="text-center">🧭 SocialMaps</h1>
</div>
<div class="bg-purple-600 h-screen text-white">
    <p>
        SocialMaps je aplikace, která nabízí kolektivně vytvářené mapy a (re)prezentuje místa, jež oproti jiným mapovým
        službám nejsou hierarchizována, neprochází schvalovacím procesem nadřazené a neznámé autority, nejsou nijak
        algoritmizována, nepodléhají placené reklamě a o veškerých procesech rozhoduje pouze uživatelská komunita.
    </p>
    <p>
        Snahou je tak proces mapování přeměnitv sociální aktivitu, která nekončí přímočarým sledováním zvýrazněné
        trajektorie, cestu neurčuje nejsnadnější a nejrychlejší překonání trasy od startu k cíli. SocialMaps nabízí
        obsah,k němuž se dá vztáhnout jak geograficky,tak i historicky a společensky.
    </p>
    <p>
        SocialMaps jsou nástrojem, jehož cílemje formovat komunitu, která svět jenom nekonzumuje, ale taky prožívá a
        pokouší se jej mapovat jinak, než počtem hvězdičeknebo mírou kyselosti kávy. ✨
    </p>
</div>
<div class="bg-blue-600 text-white">
    <p>
        Mapy totiž nejsou nikdy nositeli objektivní skutečnosti a nikdy nezaznamenávají mapované území neutrálním
        způsobem. Záleží vždy na tom, kdo a za jakým účelem je vytváří.
    </p>
    <p>
        A podle toho taky ovlivňují to, jakým způsobem o mapách smýšlíme, jak je používáme, jaká je jejich podstata,
        komu a jak mají a mohou sloužit a jaký svět nám pomáhají reprezentovat,ale i poznávat; co nám mohou říci o
        světěa schopnosti zapojení člověka v procesutvorby map.
    </p>
    <p>
        Principy a mechanismy, na kterých současné mapové služby fungují, vytváří značně limitující bariéru pro to, co
        nám mohou mapy sdělovat, jak se díky nim městem pohybujeme a jak své okolí vnímáme. Proto se je SocialMaps snaží
        zcela eliminovat.
    </p>
</div> -->