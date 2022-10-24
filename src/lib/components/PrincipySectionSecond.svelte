<script>
    export let stuff

    import {
        Accordion,
        AccordionItem
    } from 'svelte-collapsible'

    const items = [{
            key: 'a',
            title: '👑 Žádná hierarchizace míst',
            subtitle: 'V prostředí konkrétní lokace většiny mapových a navigačních služeb jsou (re)prezentována přednostně místa, která jsou službami a jejich algoritmy vyhodnocena jako „významná“ nebo „relevantní“. SocialMaps s žádnými algoritmi nepracují; o relevanci míst rozhodují pouze uživatelé…',
            text: `Mnoho služeb,jako jsou například Google Maps, funguje na principu přeprodávání dat o uživatelích korporacím a jednotlivcům, kteří díky nim mohou lépe cílit svoji reklamu. To pak znamená, že  reprezentace dané lokality je definována podniky, které se dají v důsledku monetizovat. Google navíc již i problematicky definuje místa jako „firmy“ — jejichž význam je dán jejich ziskem, který se pochopitelně promítá i do oné reprezentace. 
            <br> <br>
            Mapy jsou tak v důsledku podřízené podnikům a korporacím namísto lidem v místě žijícím. A právě kartografické podklady, které mapují určité zkušenosti lidí — např. jakým způsobem ve městě žijí, jaké jsou jejich aktivity, zájmy, jak se městem pohybují — mohou být skutečnou podstatou map, jež formují charakter místa. Informace, které takové podklady prezentují, by měly být vázány ke konkrétnímu místu, kde jsou i tvořeny. 
            <br> <br>
            Formální vzhled a struktura SocialMaps se navíc nijak zásadně od jiných aplikací (jejichž podstatou je práce s mapovými podklady) neliší — není to ani jejich intencí. Naopak záměrně pracují se zcela familiárními grafickými fragmenty a s jejich pomocí pouze prezentují jinou skutečnost. Narozdíl od jiných platforem — kde jsou placená místa zvýrazněna a uživatelům*kám vybízena — mají v SocialMaps formy příspěvků a lokací stejné grafické řešení, a proto nedochází k eventuální manipulaci s uživateli*kami a bojem o jejich pozornost.`
        },
        {
            key: 'b',
            title: '💵 Žádné manipulativní reklamy',
            subtitle: 'Reprezentace konkrétních míst v prostředí map mnoha služeb je podmíněna placenou reklamou nebo různými zájmy jedinců, či korporací; a tak jsou uživatelům*kám zprostředkovávána převážně místa, která se dají v důsledku monetizovat. SocialMaps tento ekonomický model zcela odmítají…',
            text: 'Ten totiž vede k tomu, že jsou v dané lokaci hierarchicky upřednostněna místa, v nichž zákonitě probíhá transakce (obchody, restaurace, hotely a „známé podniky“) a místa, která mají finanční kapitál pro prezentaci. Podstatou mapy má být naopak souhrn určitých znalostí; ve prospěch placené reklamy je ale struktura světa prezentována bez ohledu na tyto faktory. A tak se z mapování stává jakýsi index míst, jež sdělují vágní fráze generované wiki-hesly a otevírací dobu s hodnocením; namísto toho, aby mapování bylo dlouhodobějším procesem, jež by se snažil zachycovat prostor prizmatem obyvatel — což je záměrem SocialMaps.'
        },
        {
            key: 'c',
            title: '🃏 Žádné autoritativní schvalovací procesy',
            subtitle: 'V prostředí konkrétní lokace většiny mapových a navigačních služeb jsou (re)prezentována přednostně místa, která jsou službami a jejich algoritmy vyhodnocena jako „významná“ nebo „relevantní“. SocialMaps s žádnými algoritmi nepracují; o relevanci míst rozhodují pouze uživatelé…',
            text: `Cílem SocialMaps je vytvoření nástroje, jež zaručí to, že znalosti, které jsou prezentovány v rámci aplikace, jsou skutečně vázány ke konkrétnímu místu a času, kde a kdy byly taky tvořeny; a žeo jejich reprezentaci rozhodují samotní uživatelé, nikoli nadřazená autorita, jejíž principy a zásady jsou nejasné nebo neznámé. SocialMaps svá pravidla, procesy a metodiky jasně formulují a demokratizují, čímž nabízí alternativu k současným mapovým službám — uživatelé*ky mají možnost poznávat místa, která byla vytvořena jinými uživateli*kami, kteří*ré v daném místě žijí; nikoli skrze optiku podniků a jejich transakčních záměrů…`
        },
        {
            key: 'd',
            title: '⚖️ Demokratizace',
            subtitle: 'V prostředí konkrétní lokace většiny mapových a navigačních služeb jsou (re)prezentována přednostně místa, která jsou službami a jejich algoritmy vyhodnocena jako „významná“ nebo „relevantní“. SocialMaps s žádnými algoritmi nepracují; o relevanci míst rozhodují pouze uživatelé…',
            text: `Cílem SocialMaps je vytvoření nástroje, jež zaručí to, že znalosti, které jsou prezentovány v rámci aplikace, jsou skutečně vázány ke konkrétnímu místu a času, kde a kdy byly taky tvořeny; a žeo jejich reprezentaci rozhodují samotní uživatelé, nikoli nadřazená autorita, jejíž principy a zásady jsou nejasné nebo neznámé. SocialMaps svá pravidla, procesy a metodiky jasně formulují a demokratizují, čímž nabízí alternativu k současným mapovým službám — uživatelé*ky mají možnost poznávat místa, která byla vytvořena jinými uživateli*kami, kteří*ré v daném místě žijí; nikoli skrze optiku podniků a jejich transakčních záměrů…`
        },

    ]
</script>
<section id="principy" class="min-h-screen w-full snap-start bg-stone-400 text-white">
    <div class="p-4 pt-32 pb-16">
        <Accordion>
            { #each stuff as item }

            <div class="bg-stone-50 text-stone-800 p-6 rounded-md snap-start mb-4">
                <AccordionItem key={item.key}>
                    <div slot='header'>
                        <div  class="flex justify-between">
                            <h2 class="">{ item.title }</h2>
                            <!-- {#if }
                                
                            {/if} -->
                            <!-- <h2 class="">＋</h2> -->
                            <!-- <p class="mb-0">{ item.text.substring(0,100) }...</p> -->

                        </div>
                    </div>

                    <p slot='body' class='body mt-6'>
                        { @html item.text }
                    </p>

                </AccordionItem>
            </div>
            { /each }

        </Accordion>
    </div>
</section>

<style>

    .accordion-item {
        @apply text-green-500
    }
</style>