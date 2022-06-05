<script lang="ts" context="module">
  export async function load() {
    refreshPlacesAndTheirPeopleStore();
    return {
      status: 200,
    };
  }
</script>

<script lang="ts">
  import EditProfileIcon from '$lib/components/icons/EditProfileIcon.svelte';
  import LocationsListIcon from '$lib/components/icons/LocationsListIcon.svelte';
  import MapIcon from '$lib/components/icons/MapIcon.svelte';
  import ListOfLocations from '$lib/components/ListOfLocations.svelte';
  import { placesAndTheirPeopleStore, refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';

  export const prerender = true;
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Jump to essential pages." />
</svelte:head>

<div class="min-h-screen-nav hero mx-auto max-w-md bg-base-200 text-base-content md:max-w-full ">
  <div class="hero-content px-4 text-center md:px-0">
    <div class="flex flex-col gap-4">
      <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">Get Started</h2>
      <ListOfLocations places={$placesAndTheirPeopleStore} />
      <!-- <h3 class="mb-5 text-3xl font-bold">Hop Onto One of the Quick Links</h3> -->
      <!-- <p class="mx-auto mb-5 w-full max-w-lg">Caption</p> -->
      <!-- <div class="font-bold">Creating a button</div> -->
      <!-- using only utility classes vs using daisyUI component classes -->

      <div class="card flex flex-col justify-between bg-base-100 p-2 md:flex-row">
        <a href="/map" sveltekit:prefetch class="btn btn-ghost btn-md shrink grow basis-0">
          <MapIcon /> People in New Haven
        </a>
        <div class="divider divider-horizontal" />
        <a href="/map" sveltekit:prefetch class="btn btn-ghost btn-md shrink grow basis-0">
          <MapIcon /> Go To Map
        </a>
        <div class="divider divider-horizontal" />
        <a href="/locations" sveltekit:prefetch class="btn btn-ghost btn-md shrink grow basis-0">
          <LocationsListIcon /> See All Locations
        </a>
      </div>

      <div class="mb-24 flex w-full flex-col justify-center gap-4">
        <a href="/profile" sveltekit:prefetch class="btn btn-primary btn-md shrink grow basis-0">
          <EditProfileIcon /> Edit Profile
        </a>
        <!-- <div class="alert alert-error shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 flex-shrink-0 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              ><path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              /></svg
            >
            <span>
              The page you wanted to go to does not exist, please try again with
              a different link!
            </span>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</div>
