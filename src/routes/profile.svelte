<script lang="ts" context="module">
  export async function load() {
    refreshPlacesAndTheirPeopleStore();
    return {
      status: 200,
    };
  }
</script>

<script lang="ts">
  import ListOfLocations from '$lib/components/ListOfLocations.svelte';
  import UserCard from '$lib/components/UserCard.svelte';
  import UserLocationCard from '$lib/components/UserLocationCard.svelte';
  import UserResponsesCard from '$lib/components/UserResponsesCard.svelte';
  import UserSocials from '$lib/components/UserSocials.svelte';
  import { profileStore } from '$lib/stores/auth/profileStore';
  import { placesAndTheirPeopleStore,refreshPlacesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';
  </script>

<svelte:head>
  <title>Profile</title>
  <meta name="description" content="Edit my profile." />
</svelte:head>

<div class="min-h-screen-nav hero bg-base-200">
  <div
    id="component-demo"
    class="flex w-full flex-col items-stretch gap-4 px-4 pt-1 pb-10 md:grid md:grid-flow-col md:grid-cols-12 md:grid-rows-6"
  >
    <!-- Cell 1 -->
    <div class="col-span-4 row-span-6 xl:col-span-3">
      <div class="flex flex-col gap-4">
        <UserCard bind:userProfileInformation={$profileStore} />
        <div class="rounded-box mt-4 bg-neutral py-2 shadow-xl xl:w-full">
          <UserSocials bind:userProfileInformation={$profileStore} />
        </div>
        <UserLocationCard bind:userProfileInformation={$profileStore} />
        <ListOfLocations places={$placesAndTheirPeopleStore} />
      </div>
    </div>
    <!-- Cell 2 -->
    <!-- <div class="col-span-4 row-span-3 xl:col-span-2">
      <SpotifyPlayer url={$profileStore?.expression} />
      <UserAvatarsRow {userProfileInformation} />
    </div> -->
    <!-- Cell 3 -->
    <!-- <div class="col-span-4 row-span-3 xl:col-span-3" /> -->
    <!-- Cell 4 -->
    <!-- <div class="col-span-4 row-span-3 xl:col-span-3">
      <div
        class="rounded-box mx-2 flex flex-shrink-0 flex-col justify-center gap-4 bg-base-100 p-4 shadow-xl xl:mx-0 xl:w-full"
      >
        <ListOfLocations {places} />
      </div>
    </div> -->
    <!-- Cell 5 -->
    <div class="col-span-8 row-span-6 xl:col-span-9">
      <UserResponsesCard bind:userProfileInformation={$profileStore} />
    </div>

    <!-- <div class="col-span-2 row-span-3"> -->
    <!-- <UserStatsInfoOptions {userProfileInformation} /> -->
    <!-- </div> -->
    <!-- Cell 6 -->
    <!-- <div class="col-span-2 row-span-3"> -->
    <!-- </div> -->

    <!-- 
      
      <UserMenuItems {userProfileInformation} />
       -->

    <!-- TODO: Button for Go to Locations
       <div class="form-control">
      <div class="divider" />
      <a class="btn btn-secondary btn-block space-x-2" href="/locations">
        Insert an svg of a list of Locations
        <LocationsListIcon />

        <span>Go to Locations</span>
      </a>
    </div> -->
  </div>
</div>
<!-- <div class="divider divider-horizontal">OR</div> -->
