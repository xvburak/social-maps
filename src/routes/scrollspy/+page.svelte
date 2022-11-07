<script>
    import ScrollLink from "$lib/components/scrollspy/ScrollLink.svelte";
    import ScrollSection from "$lib/components/scrollspy/ScrollSection.svelte";
    import ActionBar from "$lib/components/ActionBar.svelte";
    import {
        activeSectionId
    } from '../../stores.js'
  </script>
  
  <main>
      <ScrollSection id="section-1">
          <h2>Section 1</h2>
      </ScrollSection>
      
      <!-- Nested Section -->
      <ScrollSection id="section-2">
          <h2>Section 2 </h2>
      </ScrollSection>
      
      <ScrollSection id="section-3">
          <h2>Section 3</h2>
      </ScrollSection>
  </main>

    {#if $activeSectionId === "section-1"}
       <ActionBar link="#section-2" copy="section 2" />
    {:else if $activeSectionId === "section-2"}
        <ActionBar link="#section-3" copy="section 3" />
    {:else if $activeSectionId === "section-3"}
        <!-- <ActionBar link="#section-3" copy="section 3" /> -->
    {/if}


  <style>
      :global(html,body) {
          background-color: #ddd;
          min-height: 100%;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          overflow-x: hidden;
          scroll-behavior: smooth;
      }
      :global(main) {
          padding-bottom: 200px;
      }
/*       
      aside {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed; bottom: 0rem; left: 0rem; z-index: 10;
          width: 100vw; 
          height: max-content;
      } */
  </style>