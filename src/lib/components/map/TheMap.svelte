<script lang="ts">
  import { key } from '$lib/components/map/mapbox';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { onDestroy,setContext } from 'svelte';
  
  // const NewHaven = { longitude: -72.9, latitude: 41.3, zoom: 8 };
  const CenterUS = { longitude: -95.7, latitude: 37.1, zoom: 2 };

  let generateFacebookMarkers: () => void;

  setContext(key, {
    getMap: () => map,
  });

  let container: HTMLDivElement;
  let map: mapboxgl.Map;
  onDestroy(() => {
    if (map) map.remove();
  });

  function load() {
    map = new mapboxgl.Map({
      container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [CenterUS.longitude, CenterUS.latitude],
      doubleClickZoom: false,
      zoom: CenterUS.zoom,
      maxZoom: 10,
    });

    /** Add a search bar to the map */
    const geocoder = new MapboxGeocoder({
      // * Options here: https://github.com/mapbox/mapbox-gl-geocoder/blob/master/API.md#mapboxgeocoder
      accessToken: mapboxgl.accessToken,
      placeholder: 'Jump to City...',
      marker: false,
    });
    map.addControl(geocoder);

    map.on('load', () => {
      map.flyTo({
        center: [CenterUS.longitude, CenterUS.latitude],
        speed: 2.5,
        essential: true,
      });
      // loadFacebook(map!, queryYear)
    });
    // generateMarkers(map, $placesAndTheirPeopleStore);
  }
</script>

<svelte:head>
  <!-- this special element will be explained in a later section -->
  <link rel="stylesheet" href="https://unpkg.com/mapbox-gl/dist/mapbox-gl.css" on:load={load} />
</svelte:head>

<!-- Init mapbox -->
<div bind:this={container} class="h-screen-nav w-full">
  {#if map}
    <slot />
  {/if}
</div>

<!-- <div id="map" class="h-screen-nav w-full" /> -->

<!-- <button class="btn" on:click={generateFacebookMarkers} /> -->
