<script>
    import {
        inview
    } from "svelte-inview";
    import {
        activeSectionId
    } from '../../../stores.js'
    export let id;
    export let nested;

    const options = {
        threshold: 1
    }
    const handleEnter = id => ($activeSectionId = id);
</script>

<section {id} class:active={$activeSectionId===id} use:inview={options} on:enter={()=> handleEnter(id)}>
    <slot></slot>

    {#if nested}
          <svelte:self />
      {/if}
  </section>
  
  <style>
    section {
          background-color: rgba(245, 153, 153, 0.42);
          margin-bottom: 1rem;
          /* height: 100vh; */
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 90vh;
          transition: .5s ease-in-out;
    }
      section.active {
          color: orangered;
          background: rgba(56, 240, 53, 0.778);
      }
  </style> 