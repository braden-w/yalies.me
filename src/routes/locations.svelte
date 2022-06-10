<script context="module" lang="ts">
  import { refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';
  import LocationsPage from '../lib/components/pages/LocationsPage.svelte';
  export async function load() {
    await refreshPlacesAndTheirPeopleStore();
    return {
      status: 200,
    };
  }
</script>

<script lang="ts">
  import TheLocationPromptModal from '$lib/components/TheLocationPromptModal.svelte';
</script>

<svelte:head>
  <title>Edit Location</title>
  <meta name="description" content="Edit my current location." />
</svelte:head>

<LocationsPage />
<TheLocationPromptModal />
