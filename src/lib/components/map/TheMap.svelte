<script lang="ts" context="module">
  function createPopup({
    coordinates,
    place,
    people,
    map,
  }: {
    coordinates: any;
    place: Feature;
    people: Feature['properties']['people'];
    map: mapboxgl.Map;
  }): mapboxgl.Popup {
    const popup = new mapboxgl.Popup({ closeButton: false, closeOnClick: false })
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
    ${people
      .map((person) => {
        return `<li>
        <a class="content-center" href="/facebook/${person.email}">
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
    popup.addClassName('dropdown-hover');
    return popup;
  }
</script>

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

  setContext(key, {
    getMap: () => map,
  });

  let container: HTMLDivElement;
  let map: mapboxgl.Map;
  onDestroy(() => {
    if (map) map.remove();
  });
  let currentPopup: mapboxgl.Popup;
  let pinnedPopup: mapboxgl.Popup;

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
      map.addSource('geojson', {
        type: 'geojson',
        data: 'https://raw.githubusercontent.com/braden-w/yalies.me-geojson/main/places_with_facebook_geojson.json?token=GHSAT0AAAAAABVNYPU3IW4HYNVANZWIBTTKYVCUSEQ',
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
              [10, 12],
            ],
          },
          'circle-color': '#f00',
          'circle-opacity': 0.5,
        },
      });

      map.on('mouseover', 'geojson', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        // Copy coordinates array.
        const place = e.features?.[0] as unknown as Feature;
        const coordinates = place.geometry.coordinates.slice();
        const people = eval(place.properties.people as unknown as string) as Feature['properties']['people'];
        console.log('🚀 ~ file: TheMap.svelte ~ line 82 ~ map.on ~ place', place);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        currentPopup = createPopup({ coordinates, place, people, map });
      });

      map.on('mouseleave', 'geojson', () => {
        map.getCanvas().style.cursor = '';
        if (currentPopup) currentPopup.remove();
      });

      map.on('click', 'geojson', (e) => {
        e.preventDefault();
        if (pinnedPopup) pinnedPopup.remove();
        // Copy coordinates array.
        const place = e.features?.[0] as unknown as Feature;
        const coordinates = place.geometry.coordinates.slice();
        const people = eval(place.properties.people as unknown as string) as Feature['properties']['people'];
        console.log('🚀 ~ file: TheMap.svelte ~ line 82 ~ map.on ~ place', place);

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        pinnedPopup = createPopup({ coordinates, place, people, map });
      });

      map.on('click', function (e) {
        if (e.defaultPrevented === false) {
          if (pinnedPopup) pinnedPopup.remove();
        }
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
