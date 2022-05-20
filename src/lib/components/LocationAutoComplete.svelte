<script lang="ts">
  import { supabase } from '$lib/utils/supabaseClient';
  import { sessionStore } from '$lib/stores/sessionStore';
  import {
    defaultResults,
    uploadPlaceToSupabase,
    uploadUserPlaceSelectionToSupabase,
    type Payload
  } from '$lib/components/LocationAutoComplete';
  import { getUserLocation } from '$lib/utils/getUserLocation';

  let query = '';
  $: isQueryLongEnough = query.length >= 2;

  let results: google.maps.places.AutocompletePrediction[] = defaultResults;

  const resetResults = () => (results = defaultResults);

  async function fetchLocations() {
    const userLocation = await getUserLocation();
    query = userLocation?.user_responses.places.description ?? '';
    if (query !== '') results = [];
  }
  fetchLocations();

  // Functions for when query changes value
  let timer: NodeJS.Timeout | null;
  $: if (query.length == 0) {
    const user_response_id = $sessionStore?.user_response_id;
    supabase
      .from('user_responses')
      .upsert({ place_id: null, user_response_id }, { returning: 'minimal' });
  }
  $: if (query.length < 2) resetResults();
  $: if (query.length >= 2) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fetchResults();
    }, 300);
  }

  // Fetch results from the Google Places API
  function fetchResults() {
    const sessionToken = new google.maps.places.AutocompleteSessionToken();
    const service = new google.maps.places.AutocompleteService();
    const request: google.maps.places.AutocompletionRequest = {
      input: query,
      sessionToken,
      types: ['(cities)']
    };
    service.getPlacePredictions(request, (response, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        isQueryLongEnough
          ? (results = response ?? defaultResults)
          : resetResults();
        console.log(results);
      }
    });
  }

  async function handleClick(
    clicked: google.maps.places.AutocompletePrediction
  ) {
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
        geog: `SRID=4326;POINT(${lng} ${lat})`
      };
      console.log(payload);
      uploadPlaceToSupabase(payload);

      const user_response_id = $sessionStore?.user_response_id;
      uploadUserPlaceSelectionToSupabase(user_response_id, place_id);
    } catch (error: any) {
      alert(error.message);
    }
  }
</script>

<svelte:head>
  <script
    async
    defer
    type="text/javascript"
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBZFzojqVe47aB3f_QwnU9IKaCZEbeuG0A&libraries=places">
  </script>
</svelte:head>

<!-- A Location Autocomplete built with DaisyUI that uses the Google Map Places API to autocomplete the location as the user is typing -->

<div class="dropdown dropdown-top w-full">
  <div class="form-control">
    <label class="label" for="location">
      <span class="label-text">I'm currently in...</span>
    </label>
    <input
      tabindex="0"
      type="text"
      id="location"
      class="input input-bordered"
      placeholder="Start typing your city here..."
      bind:value={query}
    />
  </div>

  <!-- For each result in results, display  -->
  {#if results.length > 0}
    <ul
      class="menu menu-compact dropdown-content  shadow bg-base-100 rounded-box text-md w-full"
      tabindex="0"
    >
      {#each results as result}
        <li on:click={handleClick(result)}>
          <button>
            {result.description}
          </button>
        </li>
      {/each}
    </ul>
  {/if}
</div>