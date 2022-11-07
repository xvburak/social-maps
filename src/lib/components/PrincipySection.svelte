<script>
    export let stuff
    import PrincipyItem from "$lib/components/PrincipyItem.svelte";
</script>

<section id="principy" class="min-h-screen w-full  bg-stone-400 text-white">
    <div class="p-4 pt-32 pb-16 max-w-screen-xl mx-auto">
        { #each stuff as item }
            <PrincipyItem {item} />
        { /each }
    </div>
</section>

<div class="h-12 bg-yellow-400 text-white omg flex flex-col justify-center z-20 w-full">
    <div class="w-full">
        <a class="text-center block" href="#funkce">Hlavní funkce aplikace 👇</a>
    </div> 
</div>


<style>
    .omg {
        position: sticky;
        bottom: env(safe-area-inset-bottom);
    }
</style>