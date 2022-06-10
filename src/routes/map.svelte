<script context="module" lang="ts">
  import MapMarker from '$lib/components/map/MapMarker.svelte';
  import TheMap from '$lib/components/map/TheMap.svelte';
  import { loadFacebook } from '$lib/stores/map/facebook';
  import { placesAndTheirPeopleStore, refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';

  export const prerender = false;
  /** List all places from the database. Return it as a list of items that contains place description, place lat, place lng, and place people
   * Place people is a list of users that are associated with the place
   * Each user has a id, name, and avatar_url
   */
  export async function load() {
    await refreshPlacesAndTheirPeopleStore();
    return { status: 200 };
  }
</script>

<script lang="ts">
import TheLocationPromptModal from "$lib/components/TheLocationPromptModal.svelte";

  let places = $placesAndTheirPeopleStore ?? [];
</script>

<svelte:head>
  <title>Map</title>
  <meta name="description" content="Find Yale Students in the area to meet up!" />
</svelte:head>

<TheMap>
  {#each places as place}
    <MapMarker {place} />
  {/each}
</TheMap>
<TheLocationPromptModal />
