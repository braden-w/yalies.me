<script context="module" lang="ts">
  import TheMapMarkers from '$lib/components/map/MapMarker.svelte';
  import TheMap from '$lib/components/map/TheMap.svelte';
  import { facebook, loadFacebook } from '$lib/stores/map/facebook';
  import { placesAndTheirPeopleStore, refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';

  export const prerender = false;
  /** List all places from the database. Return it as a list of items that contains place description, place lat, place lng, and place people
   * Place people is a list of users that are associated with the place
   * Each user has a id, name, and avatar_url
   */
  export async function load() {
    await refreshPlacesAndTheirPeopleStore();
    await loadFacebook();
    return { status: 200 };
  }
</script>

<script lang="ts">
  let places = $placesAndTheirPeopleStore ?? [];
  let facebookPlaces = $facebook ?? [];
</script>

<svelte:head>
  <title>Map</title>
  <meta name="description" content="Find Yale Students in the area to meet up!" />
</svelte:head>

<TheMap>
  {#each places as place}
    <TheMapMarkers {place} />
  {/each}
  {#each facebookPlaces as facebookPlace}
    <TheMapMarkers place={facebookPlace} />
  {/each}
</TheMap>
