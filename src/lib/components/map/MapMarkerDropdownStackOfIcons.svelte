<!-- 
  @component
  Generates a stack of icons with three random people and an indicator in the top right for overall number of people at a location -->
<script lang="ts">
  import { key } from '$lib/components/map/mapbox';
  import { getContext, onMount } from 'svelte';
  const { getMap } = getContext(key);
  const map = getMap();

  export let threeAvatars: string[];
  export let indicator: number;

  let avatarSize = 8;
  let ring = false;

  // On click, add a ring around it
  function addRing() {
    ring = true;
  }

  onMount(() => {
    // On click out, remove ring around it
    document.getElementsByClassName('mapboxgl-canvas')[0].addEventListener('click', () => {
      // For every element in el with a class "outline-on-click", remove the class "ring" to it if it exists
      ring = false;
    });

    const scalePercent = (defaultPxSize = 32, defaultZoom = 2, scaleFactor = 0.1) => {
      const scalePercent = 1 + (map.getZoom() - defaultZoom) * scaleFactor;
      return defaultPxSize * scalePercent;
    };

    /** Scale icons on zoom */
    map.on('zoom', () => {
      const newPx = scalePercent();
      console.log('🚀 ~ file: map.svelte ~ line 135 ~ map.on ~ newPx', newPx);
      avatarSize = newPx;
    });
  });
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label tabindex="0" name="selected" class="stack" on:click={addRing}>
  <div class="avatar indicator">
    <span class="badge indicator-item badge-secondary">{indicator}</span>
    <div class="w-{avatarSize} h-{avatarSize} outline-on-click rounded-lg" class:ring>
      <img src={threeAvatars[0]} referrerpolicy="no-referrer" alt="Avatar" />
    </div>
  </div>
  {#if threeAvatars.length >= 2}
    <div class="avatar">
      <div class="w-{avatarSize} h-{avatarSize} outline-on-click rounded-lg" class:ring>
        <img src={threeAvatars[1]} referrerpolicy="no-referrer" alt="Avatar" />
      </div>
    </div>
  {:else if threeAvatars.length >= 3}
    <div class="avatar">
      <div class="w-{avatarSize} h-{avatarSize} outline-on-click rounded-lg" class:ring>
        <img src={threeAvatars[2]} referrerpolicy="no-referrer" alt="Avatar" />
      </div>
    </div>
  {/if}
</label>
