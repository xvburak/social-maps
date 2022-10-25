<script>
    export let stuff
    import PrincipyItem from "$lib/components/PrincipyItem.svelte";
</script>

<section id="principy" class="min-h-screen w-full snap-start bg-stone-400 text-white">
    <div class="p-4 pt-32 pb-16">
        { #each stuff as item }
            <PrincipyItem {item} />
        { /each }
    </div>
</section>
