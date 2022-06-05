<script lang="ts">
  import type { placesAndTheirPeopleStore } from '$lib/stores/placesAndTheirPeopleStore';
  import type { definitionsJSON, Person } from '$lib/types/definitionsJSON';
  import { generateStackOfIcons } from '$lib/utils/map/generateInnerHTML';

  function getThreeAvatarUrls(place: definitionsJSON['places_with_people']) {
    return place.people?.slice(0, 3).map((person) => (<Person>person).avatar_url);
  }
  export let places: typeof $placesAndTheirPeopleStore;
</script>

<div class="rounded-box max-h-96 overflow-y-auto bg-neutral text-neutral-content shadow-xl">
  <ul class="menu overflow-visible p-3">
    <li class="menu-title">
      <span>Locations</span>
    </li>
    {#if places}
      {#each places as place}
        <li>
          <a href={`/places/${place.place_id}`}>
            {@html generateStackOfIcons({
              threeAvatars: getThreeAvatarUrls(place) ?? [],
              indicator: (place.people ?? []).length,
            })}

            {place.description}
          </a>
        </li>
      {/each}
    {/if}
  </ul>
</div>
