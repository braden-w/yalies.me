<script lang="ts">
  import { key } from '$lib/components/map/mapbox';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { onDestroy, setContext } from 'svelte';

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
    });

    const scalePercent = (defaultPxSize = 32, defaultZoom = 2, scaleFactor = 0.1) => {
      const scalePercent = 1 + (map.getZoom() - defaultZoom) * scaleFactor;
      return defaultPxSize * scalePercent;
    };

    /** Scale icons on zoom */
    map.on('zoom', () => {
      const newPx = scalePercent();
      // console.log('🚀 ~ file: map.svelte ~ line 135 ~ map.on ~ newPx', newPx);
      document.querySelectorAll<HTMLElement>('.outline-on-click').forEach((innerEl) => {
        // Set the height and width innerEl to newPx
        innerEl.style.width = `${newPx}px`;
        innerEl.style.height = `${newPx}px`;
        innerEl.style.transformOrigin = 'bottom';
      });
    });
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
