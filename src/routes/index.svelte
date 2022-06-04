<script lang="ts" context="module">
  export async function load() {
    refreshPlacesAndTheirPeopleStore();
    return {
      status: 200,
    };
  }
</script>

<script lang="ts">
  import LocationAutoComplete from '$lib/components/LocationAutoComplete.svelte';
  import LocationsPage from '$lib/components/pages/LocationsPage.svelte';
  import { profileStore } from '$lib/stores/auth/profileStore';
  import { refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';

  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Jump to essential pages." />
</svelte:head>

<LocationsPage />
<input type="checkbox" id="my-modal-6" class="modal-toggle" />
<div class="modal modal-open modal-bottom sm:modal-middle">
  <div class="modal-box">
    <div class="text-xl font-extrabold">Where are you now?</div>
    <div class="my-4 text-xs text-base-content/70">
      To continue, enter your current city. For privacy, feel free to use a city that is in proximity rather than exact
      location.
    </div>
    <LocationAutoComplete isCurrentUser={true} query={$profileStore?.description ?? ''} />
    <div class="modal-action">
      <label for="my-modal-6" class="btn">Okay!</label>
    </div>
  </div>
</div>

<!-- <div class="min-h-screen-nav hero bg-base-200 text-base-content">
  <div class="hero-content px-4 text-center md:px-0">
    <div class="flex flex-col gap-4">
      <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">
        Get Started
      </h2>
      <div class="card flex flex-col justify-between bg-base-100 p-2">
        <a
          href="/places/New Haven, CT, USA"
          sveltekit:prefetch
          class="btn btn-ghost btn-md shrink grow basis-0"
        >
          <MapIcon /> People in New Haven
        </a>
        <div class="divider divider-horizontal" />
        <a
          href="/map"
          sveltekit:prefetch
          class="btn btn-ghost btn-md shrink grow basis-0"
        >
          <MapIcon /> Go To Map
        </a>
        <div class="divider divider-horizontal" />
        <a
          href="/locations"
          sveltekit:prefetch
          class="btn btn-ghost btn-md shrink grow basis-0"
        >
          <LocationsListIcon /> See All Locations
        </a>
      </div>
      <ListOfLocations places={$placesAndTheirPeopleStore} />
      <div class="mb-24 flex w-full justify-center">
        <a
          href="/profile"
          sveltekit:prefetch
          class="btn btn-primary btn-md shrink grow basis-0"
        >
          <EditProfileIcon /> Edit Profile
        </a>
      </div>
    </div>
  </div>
</div> -->
