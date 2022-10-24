<script>
    import Item from '$lib/components/PrincipyItem.svelte'
    const data = [
        {
            'header': '👑 Žádná hierarchizace míst',
            'content': 'V prostředí konkrétní lokace většiny mapových a navigačních služeb jsou (re)prezentována přednostně místa, která jsou službami a jejich algoritmy vyhodnocena jako „významná“ nebo „relevantní“. SocialMaps s žádnými algoritmi nepracuje; o relevanci míst rozhodují pouze uživatelé…'
        },
        {
            'header': '💸 Žádné manipulativní reklamy',
            'content': 'Reprezentace konkrétních míst v prostředí map mnoha služeb je podmíněna placenou reklamou nebo různými zájmy jedinců, či korporací; a tak jsou uživatelům*kám zprostředkovávána převážně místa, která se dají v důsledku monetizovat. SocialMaps tento ekonomický model zcela odmítají…'
        },
        {
            'header': '💸 Žádné manipulativní reklamy',
            'content': 'Reprezentace konkrétních míst v prostředí map mnoha služeb je podmíněna placenou reklamou nebo různými zájmy jedinců, či korporací; a tak jsou uživatelům*kám zprostředkovávána převážně místa, která se dají v důsledku monetizovat. SocialMaps tento ekonomický model zcela odmítají…'
        },
        {
            'header': '👑 Žádná hierarchizace míst',
            'content': 'V prostředí konkrétní lokace většiny mapových a navigačních služeb jsou (re)prezentována přednostně místa, která jsou službami a jejich algoritmy vyhodnocena jako „významná“ nebo „relevantní“. SocialMaps s žádnými algoritmi nepracuje; o relevanci míst rozhodují pouze uživatelé…'
        },
        {
            'header': '💸 Žádné manipulativní reklamy',
            'content': 'Reprezentace konkrétních míst v prostředí map mnoha služeb je podmíněna placenou reklamou nebo různými zájmy jedinců, či korporací; a tak jsou uživatelům*kám zprostředkovávána převážně místa, která se dají v důsledku monetizovat. SocialMaps tento ekonomický model zcela odmítají…'
        },
        {
            'header': '💸 Žádné manipulativní reklamy',
            'content': 'Reprezentace konkrétních míst v prostředí map mnoha služeb je podmíněna placenou reklamou nebo různými zájmy jedinců, či korporací; a tak jsou uživatelům*kám zprostředkovávána převážně místa, která se dají v důsledku monetizovat. SocialMaps tento ekonomický model zcela odmítají…'
        },
    ]
</script>


<section id="principy" class="w-full snap-start bg-stone-400 text-white">
    <div class="p-4 pt-32 pb-16">
        {#each data as entry}
            <Item {entry} />
        {/each}
    </div>
</section>