<script>
    import HeroSection from "$lib/components/HeroSection.svelte";
    import AboutSection from "$lib/components/AboutSection.svelte";
    import ActionBar from "$lib/components/ActionBar.svelte";
    import PrincipySection from "$lib/components/PrincipySection.svelte";
    import FunctionSection from "$lib/components/FunctionSection.svelte";
    import ContactSection from "$lib/components/ContactSection.svelte";
    import { page } from '$app/stores';
    export let data
    // console.log(data.items)

    import {
        goto
    } from '$app/navigation';

    export function autoHash(node) {
        const observer = new IntersectionObserver(callback, {
            threshold: 1,
        });

        observer.observe(node);

        function callback(entries) {
            const entry = entries.find(entry => entry.isIntersecting);

            if (entry) {
                const id = entry.target.id;
                goto(`#${id}`, {
                    replaceState: true,
                    noscroll: true
                });
            }
        };

        return {
            destroy() {
                observer.disconnect();
            },
        };
    }
</script>

<main class="max-h-screen overflow-y-scroll scroll-smooth">
    <HeroSection />
    <AboutSection />
    <PrincipySection stuff={data.items} />
    <FunctionSection />
    <ContactSection />

    <h3 class="bg-green-200" id="some-section" use:autoHash>Section Title</h3>

    <!-- <section class="w-full h-screen snap-start bg-indigo-200">Section 4</section>
    <section class="w-full h-screen snap-start bg-yellow-200">Section 5</section> -->
</main>

{#if $page.url.pathname === "/#some-section"}
    <ActionBar link="/#some-section" copy="bubu" />
{:else}
    <ActionBar link="/#some-section" copy="blabla" />
{/if}



<style>
    main {
        overflow-y: scroll;
        scroll-snap-type: y proximity;
    }
</style>