import type { definitionsJSON } from '$lib/types/definitionsJSON';
import createStore from '$lib/utils/createStore';
import { supabase } from '$lib/utils/supabaseClient';
import type { Writable } from 'svelte/store';

export async function refreshPlacesAndTheirPeopleStore() {
  const { data: places, error } = await supabase
    .from<definitionsJSON['places_with_people']>('places_with_people')
    .select('*')
    .not('people', 'is', null);

  if (places) {
    // Move the place with place_id 'ChIJ5XCAOkTY54kR7WSyWcZUo_Y' to the top of the list
    const newHavenPlaceID = 'ChIJ5XCAOkTY54kR7WSyWcZUo_Y';
    const newHaven = places.find((place) => place.place_id === newHavenPlaceID);
    if (newHaven) {
      places.splice(places.indexOf(newHaven), 1);
      places.unshift(newHaven);
    }

    // Log result
    console.log(
      '🚀 ~ file: placesAndTheirPeopleStore.ts ~ line 22 ~ refreshPlacesAndTheirPeopleStore ~ places',
      places
    );
    placesAndTheirPeopleStore.set(places);
    return places;
  }
  if (error) {
    console.error(error);
    placesAndTheirPeopleStore.set(null);
  }
  return null;
}

/** A store that lists places and their people.
 * Lists all places with people, and their corresponding people.
 */
export const placesAndTheirPeopleStore: Writable<definitionsJSON['places_with_people'][] | null> = createStore<
  definitionsJSON['places_with_people'][] | null
>('yalies.me-placesAndTheirPeopleStore', null);
