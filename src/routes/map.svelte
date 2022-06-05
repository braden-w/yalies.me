<script context="module" lang="ts">
  export const prerender = false;
  /** List all places from the database. Return it as a list of items that contains place description, place lat, place lng, and place people
   * Place people is a list of users that are associated with the place
   * Each user has a id, name, and avatar_url
   */
  export async function load() {
    await refreshPlacesAndTheirPeopleStore();
    loadFacebook();
    return { status: 200 };
  }
</script>

<script lang="ts">
  import { facebook, loadFacebook } from '$lib/stores/map/facebook';
  import { placesAndTheirPeopleStore, refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import { generateInnerHTML } from '$lib/utils/map/generateInnerHTML';
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
  import mapboxgl from 'mapbox-gl';
  import 'mapbox-gl/dist/mapbox-gl.css';
  import { onMount } from 'svelte';

  mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_KEY;

  // const NewHaven = { longitude: -72.9, latitude: 41.3, zoom: 8 };
  const CenterUS = { longitude: -95.7, latitude: 37.1, zoom: 2 };

  let generateFacebookMarkers: () => void;

  onMount(() => {
    const map = new mapboxgl.Map({
      container: 'map',
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

    generateMarkers(map, $placesAndTheirPeopleStore);
    generateFacebookMarkers = function () {
      generateMarkers(map, $facebook);
    };
  });

  /** Add a marker to the map for each place */
  function generateMarkers(
    map: mapboxgl.Map,
    places: definitionsJSON['places_with_people'][] | definitionsJSON['places_with_facebook'][] | null
  ) {
    if (!places) return;
    places.forEach((place) => {
      const el = document.createElement('div');
      el.className = 'marker';
      el.innerHTML = generateInnerHTML(place);

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
  }
</script>

<svelte:head>
  <title>Map</title>
  <meta name="description" content="Find Yale Students in the area to meet up!" />
</svelte:head>

<!-- Init mapbox -->
<div id="map" class="h-screen-nav w-full" />
<button class="btn" on:click={generateFacebookMarkers} />
