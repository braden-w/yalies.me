<script lang="ts">
  import { key } from '$lib/components/map/mapbox';
  import type { Feature } from '$lib/stores/map/facebook';
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
  let currentPopup: mapboxgl.Popup;

  function load() {
    map = new mapboxgl.Map({
      container,
      style: 'mapbox://styles/mapbox/dark-v10',
      center: [CenterUS.longitude, CenterUS.latitude],
      doubleClickZoom: false,
      zoom: CenterUS.zoom,
      // maxZoom: 10,
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
      map.addSource('geojson', {
        type: 'geojson',
        data: 'https://gist.githubusercontent.com/braden-w/c2c907d98ad973d119324df77864d7ee/raw/f08f17d5684e8eb2cd257a698cfdf45fa6f5ffc4/places_with_facebook_geojson.json',
      });
      map.addLayer({
        id: 'geojson',
        type: 'circle',
        source: 'geojson',
        // Alternative paint style
        // paint: {
        //   'circle-radius': ['get', 'people'],
        //   'circle-color': '#fbb03b',
        //   'circle-opacity': 0.5,
        // },
        paint: {
          'circle-radius': {
            base: 1.75,
            stops: [
              [2, 2],
              [6, 4],
              [10, 8],
              [14, 24],
            ],
          },
          'circle-color': '#f00',
          'circle-opacity': 0.5,
        },
      });

      map.on('mouseover', 'geojson', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        // Copy coordinates array.
        const coordinates = e.features[0].geometry.coordinates.slice();
        const place = e.features[0] as Feature;
        console.log('🚀 ~ file: TheMap.svelte ~ line 82 ~ map.on ~ place', place);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        currentPopup = new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(
            `<ul
    class="dropdown-content menu menu-compact mt-{2} rounded-box w-52 bg-base-100 p-2 shadow"
  >
    <li>
      <a class="justify-between" href="/places/${place.properties.place_id}">
        ${place.properties.description}
      </a>
    </li>
    ${eval(place.properties.people as unknown as string)
      .map((person) => {
        // TODO: Modify a href
        return `<li>
        <a class="content-center" href="${person.email}">
          <div class="avatar">
            <div class="w-8 rounded-lg">
              <img src=${person.avatar_url} referrerpolicy="no-referrer" alt="Avatar" />
            </div>
          </div>
          <span class="text-xs">${person.name}</span>
        </a>
      </li>`;
      })
      .join('')}
  </ul>`
          )
          .addTo(map);
      });
    });

    map.on('mouseleave', 'geojson', () => {
      map.getCanvas().style.cursor = '';
      currentPopup.remove();
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
<!-- <button class="btn" on:click={generateFacebookMarkers} /> -->
