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




