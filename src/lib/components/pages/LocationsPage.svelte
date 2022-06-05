<script lang="ts">
  import { profileStore } from '$lib/stores/auth/profileStore';
  import LocationAutoComplete from '$lib/components/LocationAutoComplete.svelte';
  import ListOfLocations from '$lib/components/ListOfLocations.svelte';
  import TableOfLocations from '$lib/components/TableOfLocations.svelte';
  import { placesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';
  import EditProfileIcon from '$lib/components/icons/EditProfileIcon.svelte';
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import QuickLinksBar from '$lib/components/QuickLinksBar.svelte';

  function getNumberOfUniquePlaces(placesArray: definitionsJSON['places_with_people'][] | null) {
    // Array of place_ids
    const placeIds = placesArray?.map((place) => place.place_id) ?? [];

    // Array of unique place_ids
    const uniquePlaceIds = Array.from(new Set(placeIds));

    /** Number of unique places in the array places */
    return uniquePlaceIds.length;
  }

  let tab = 0;
</script>

<!-- <div class="hero min-h-screen-nav from-primary via-secondary to-base-200 bg-gradient-to-b text-primary-content grid" > -->
<div class="hero grid bg-base-200 p-4 text-base-content">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Where are you now?</h1>
      <p class="py-6">
        Enter your current city. For privacy, feel free to use a city that is in proximity rather than exact location.
      </p>
    </div>
    <div class="card w-full max-w-sm flex-shrink-0 bg-base-100 shadow-2xl">
      <div class="card-body overflow-visible text-base-content">
        <div class="text-center">
          <div class="avatar mx-auto">
            <div class="w-28 rounded">
              <img
                src={$profileStore?.avatar_url}
                alt="Profile"
                width="100%"
                height="100%"
                referrerpolicy="no-referrer"
              />
            </div>
          </div>
          <h1 class="text-2xl font-bold">{$profileStore?.name}</h1>
          <p class="text-lg">Yale University</p>
        </div>
        <LocationAutoComplete query={$profileStore?.description ?? ''} isCurrentUser={true} />

        <div class="form-control mt-6">
          <a href="/profile" class="btn btn-primary" sveltekit:prefetch>
            <EditProfileIcon />
            Edit My Full Profile
          </a>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="m-4">
  <div class="hero bg-base-100">
    <div class="hero-content mx-4 w-full flex-row flex-wrap px-4">
      <div class="w-full overflow-x-auto">
        <div class="w-full">
          <h1 class="text-5xl font-bold">Locations</h1>
          <p class="py-6">
            There are currently {getNumberOfUniquePlaces($placesAndTheirPeopleStore)} locations with Yalies!
          </p>
        </div>
        <div class="tabs mb-2 w-full flex-grow-0">
          <button class="tab tab-bordered tab-lg flex-1" class:tab-active={tab === 0} on:click={() => (tab = 0)}>
            List
          </button>
          <button class="tab tab-bordered tab-lg flex-1" class:tab-active={tab === 1} on:click={() => (tab = 1)}>
            Table
          </button>
        </div>
        {#if tab === 0}
          <ListOfLocations places={$placesAndTheirPeopleStore} />
        {:else if tab === 1}
          <TableOfLocations places={$placesAndTheirPeopleStore} />
        {/if}
        <QuickLinksBar />
      </div>
    </div>
  </div>
</div>
