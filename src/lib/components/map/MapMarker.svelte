<script lang="ts">
  import MapMarkerDropdown from '$lib/components/map/MapMarkerDropdown.svelte';
  import type { definitionsJSON } from '$lib/types/definitionsJSON.js';
  import { getContext,onMount } from 'svelte';
  import { key,mapboxgl } from './mapbox.js';
    
  const { getMap } = getContext(key);
  const map = getMap();

  export let place: definitionsJSON['places_with_people'];

  let el: HTMLDivElement;
  onMount(() => {
    // On click, add a shadow around it
    el.addEventListener('click', () => {
      // For every element in el with a class "outline-on-click", add the class "ring" to it
      el.querySelectorAll('.outline-on-click').forEach((el) => {
        el.classList.add('ring');
      });
    });

    // On click out, add a shadow around it
    document.getElementsByClassName('mapboxgl-canvas')[0].addEventListener('click', () => {
      // For every element in el with a class "outline-on-click", remove the class "ring" to it if it exists
      el.querySelectorAll('.outline-on-click').forEach((el) => {
        el.classList.remove('ring');
      });
    });

    const scalePercent = (defaultPxSize = 32, defaultZoom = 2, scaleFactor = 0.1) => {
      const scalePercent = 1 + (map.getZoom() - defaultZoom) * scaleFactor;
      return defaultPxSize * scalePercent;
    };

    /** Scale icons on zoom */
    map.on('zoom', () => {
      const newPx = scalePercent();
      console.log('🚀 ~ file: map.svelte ~ line 135 ~ map.on ~ newPx', newPx);
      el.querySelectorAll<HTMLElement>('.outline-on-click').forEach((innerEl) => {
        // Set the height and width innerEl to newPx
        innerEl.style.width = `${newPx}px`;
        innerEl.style.height = `${newPx}px`;
      });
      el.style.transformOrigin = 'bottom';
    });

    // Add the marker to the map
    if (!place.lng || !place.lat) return;
    new mapboxgl.Marker(el).setLngLat([place.lng, place.lat]).addTo(map);
  });
</script>

<div bind:this={el} class="marker">
  <MapMarkerDropdown {place} />
</div>
