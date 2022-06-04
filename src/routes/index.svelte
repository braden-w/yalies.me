<script lang="ts" context="module">
  export async function load() {
    refreshPlacesAndTheirPeopleStore();
    return {
      status: 200,
    };
  }
</script>

<script lang="ts">
  import LocationsPage from '$lib/components/pages/LocationsPage.svelte';
  import { refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';
  
  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Jump to essential pages." />
</svelte:head>

<LocationsPage />

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
