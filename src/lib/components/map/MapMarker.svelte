<script lang="ts">
  import MapMarkerDropdown from '$lib/components/map/MapMarkerDropdown.svelte';
  import type { definitionsJSON } from '$lib/types/definitionsJSON.js';
  import { getContext, onMount } from 'svelte';
  import { key, mapboxgl } from './mapbox.js';

  const { getMap } = getContext(key);
  const map = getMap();

  export let place: definitionsJSON['places_with_people'] | definitionsJSON['places_with_facebook'];

  let el: HTMLDivElement;
  onMount(() => {
    // Add the marker to the map
    if (!place.lng || !place.lat) return;
    new mapboxgl.Marker(el).setLngLat([place.lng, place.lat]).addTo(map);
  });
</script>

<div bind:this={el} class="marker">
  <MapMarkerDropdown place_id={place.place_id} description={place.description} people={place.people} />
</div>
