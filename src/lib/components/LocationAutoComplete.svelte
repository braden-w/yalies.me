<script lang="ts" context="module">
  interface Payload {
    place_id: string;
    description: string;
    geog: string;
  }

  async function uploadPlaceToSupabase(payload: Payload) {
    const { error: errorPlaces } = await supabase.from('places').upsert(payload, {
      returning: 'minimal', // Don't return the value after inserting
    });
    if (errorPlaces) throw errorPlaces;
  }
</script>

<script lang="ts">
  import BackspaceIcon from '$lib/components/icons/BackspaceIcon.svelte';

  import { defaultResults } from '$lib/components/LocationAutoComplete/DefaultResults';
  import { profileStore, setUserLocation } from '$lib/stores/auth/profileStore';
  import { supabase } from '$lib/utils/supabaseClient';
  const scriptSrc = `https://maps.googleapis.com/maps/api/js?key=${import.meta.env.VITE_GOOGLE_MAP_KEY}&libraries=places`

  export let isCurrentUser: boolean;
  export let query: string;
  console.log('🚀 ~ file: LocationAutoComplete.svelte ~ line 29 ~ query', query);

  $: isQueryLongEnough = query.length >= 2;

  let results: google.maps.places.AutocompletePrediction[] = defaultResults;

  const resetOptions = () => (results = defaultResults);

  // Functions for when query changes value
  let timer: NodeJS.Timeout | null;
  // Don't reset user location because query length is 0 on load
  // $: if (query.length == 0) setUserLocation(null, '');
  $: if (query.length < 2) resetOptions();
  $: if (query.length >= 2) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fetchResults();
    }, 300);
  }

  function resetLocation() {
    query = '';
    setUserLocation(null);
  }

  // Fetch results from the Google Places API
  function fetchResults() {
    const sessionToken = new google.maps.places.AutocompleteSessionToken();
    const service = new google.maps.places.AutocompleteService();
    const request: google.maps.places.AutocompletionRequest = {
      input: query,
      sessionToken,
      types: ['(cities)'],
    };
    service.getPlacePredictions(request, (response, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        isQueryLongEnough ? (results = response ?? defaultResults) : resetOptions();
        console.log(results);
      }
    });
  }

  async function handleClick(clicked: google.maps.places.AutocompletePrediction) {
    try {
      query = clicked.description;
      // Upload the place_id and description props to supabase
      const { place_id, description } = clicked;

      // Get the latitude and longitude from place_id using the Google Places API
      const geocoder = new google.maps.Geocoder();

      const { results } = await geocoder.geocode({ placeId: place_id });

      // Get lat and lng from results
      const { geometry } = results[0];
      const { location } = geometry;
      const { lat: latFunction, lng: lngFunction } = location;
      const lat = latFunction();
      const lng = lngFunction();

      // Upload place to places in Supabase
      const payload: Payload = {
        place_id,
        description,
        geog: `SRID=4326;POINT(${lng} ${lat})`,
      };
      console.log('🚀 ~ file: LocationAutoComplete.svelte ~ line 91 ~ payload', payload);
      // Make sure the place exists on the places table
      await uploadPlaceToSupabase(payload);

      await setUserLocation(place_id);
      console.log('🚀 ~ file: LocationAutoComplete.svelte ~ line 110 ~ $profileStore', $profileStore);
    } catch (error: any) {
      alert(error.message);
    } finally {
      // refreshUserLocation();
    }
  }
</script>

<svelte:head>
  <script
    async
    defer
    type="text/javascript"
    src={scriptSrc}>
  </script>
</svelte:head>

<!-- A Location Autocomplete built with DaisyUI that uses the Google Map Places API to autocomplete the location as the user is typing -->

<div class="dropdown-top dropdown w-full">
  <div class="form-control">
    <label class="label" for="location">
      <span class="label-text">I'm currently in...</span>
    </label>
    {#if !isCurrentUser}
      <input
        tabindex="0"
        type="text"
        id="location"
        class="input input-bordered w-full"
        placeholder={'n/a'}
        bind:value={query}
        disabled
      />
    {:else}
      <div class="input-group">
        <input
          tabindex="0"
          type="text"
          id="location"
          class="input input-accent w-full border-opacity-20"
          placeholder={'Start typing your city here...'}
          bind:value={query}
        />
        <button class="btn btn-ghost btn-circle border-accent border-opacity-20" on:click={resetLocation}>
          <!-- Insert a backspace svg -->
          <BackspaceIcon />
        </button>
      </div>
    {/if}
  </div>

  <!-- For each result in results, display  -->
  {#if results.length > 0}
    <ul class="text-md dropdown-content menu rounded-box menu-compact w-full bg-base-200 shadow" tabindex="0">
      {#each results as result}
        <li on:click={() => handleClick(result)}>
          <button>
            {result.description}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>
