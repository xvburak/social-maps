<script>
    import ScrollLink from "$lib/components/scrollspy/ScrollLink.svelte";
    import ScrollSection from "$lib/components/scrollspy/ScrollSection.svelte";
    import ActionBar from "$lib/components/ActionBar.svelte";
  </script>
  
  <main>
      <aside>
          <ScrollLink href="#section-1">
            <div class="bg-red-500 w-full h-full flex flex-col justify-center">
                <b>Section 1</b>
            </div>
          </ScrollLink>
          
          <ScrollLink href="#section-2">
            <div class="bg-blue-500 w-full h-full flex flex-col justify-center">
                <b>Section 2</b>
            </div>
          </ScrollLink>
  
          <ScrollLink href="#section-3">
            <div class="bg-green-500 w-full h-full flex flex-col justify-center">
                <b>Section 3</b>
            </div>
          </ScrollLink>
      </aside>
      
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

  <!-- <ActionBar />
   -->
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
      
      aside {
          display: flex;
          justify-content: center;
          align-items: center;
          position: fixed; bottom: 0rem; left: 0rem; z-index: 10;
          width: 100vw; 
          height: max-content;
      }
  </style>