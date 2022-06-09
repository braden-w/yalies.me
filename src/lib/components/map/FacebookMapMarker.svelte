<script lang="ts">
  import FacebookMapMarkerDropdown from '$lib/components/map/FacebookMapMarkerDropdown.svelte';
import type { Feature } from '$lib/stores/map/facebook.js';
  import { getContext, onMount } from 'svelte';
  import { key, mapboxgl } from './mapbox.js';

  const { getMap } = getContext(key);
  const map = getMap();

  export let place: Feature;

  let el: HTMLDivElement;
  onMount(() => {
    // Add the marker to the map
    if (!place.geometry.coordinates[0] || !place.geometry.coordinates[1]) return;
    new mapboxgl.Marker(el).setLngLat(place.geometry.coordinates).addTo(map);
  });
</script>

<div bind:this={el} class="marker">
  <FacebookMapMarkerDropdown {place}/>
</div>
