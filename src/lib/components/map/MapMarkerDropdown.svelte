<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import MapMarkerDropdownList from './MapMarkerDropdownList.svelte';
  import MapMarkerDropdownStackOfIcons from './MapMarkerDropdownStackOfIcons.svelte';

  export let place_id: string;
  export let description: string;
  export let people:
    | definitionsJSON['places_with_people']['people']
    | definitionsJSON['places_with_facebook']['people'];

  /** Get 3 random people from the 'people' property of placeWithPeople.
   * The first three people who will be the icons in the stack on the map */
  const stackIcons = people
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((person) => {
      return person.avatar_url;
    });
</script>

<div class="dropdown-hover dropdown">
  <MapMarkerDropdownStackOfIcons threeAvatars={stackIcons} indicator={people.length} />
  <MapMarkerDropdownList numberOfIconsStacked={stackIcons.length} {place_id} {description} {people} />
</div>
