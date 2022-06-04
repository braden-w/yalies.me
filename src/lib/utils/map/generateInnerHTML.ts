import { profileStore } from '$lib/stores/auth/profileStore';
import type { definitionsJSON, Person, PersonFromFacebook } from '$lib/types/definitionsJSON';
import { get } from 'svelte/store';

export function generateInnerHTML(place: definitionsJSON['places_with_people'] | definitionsJSON['places_with_facebook']) {
  // Get 3 random people from the 'people' property of placeWithPeople
  const people = place.people ?? [];
  /**The first three people who will be the icons in the stack on the map */
  const stackIcons = people
    .sort(() => 0.5 - Math.random())
    .slice(0, 3)
    .map((person) => {
      return (<Person>person).avatar_url ?? (<PersonFromFacebook>person).avatar_url;
    });
  const { place_id, description } = place;

  // Three cases for the number of people in the placeWithPeople
  if (stackIcons.length === 0) return '';
  return `<div class="dropdown dropdown-hover">
  ${generateStackOfIcons({
    threeAvatars: stackIcons,
    indicator: people.length,
  })}
  ${generateHover({
    numberOfIconsStacked: stackIcons.length,
    place_id: place_id ?? '',
    description: description ?? '',
    people,
  })}
</div>`;
}

/**Generates a stack of icons with three random people and an indicator in the top right for overall number of people at a location */
export function generateStackOfIcons({
  threeAvatars,
  indicator,
}: {
  threeAvatars: string[];
  indicator: number;
}): string {
  const avatarSize = 8;
  return `<label tabindex="0" name="selected" class="stack">
    <div class="avatar indicator">
      <span class="indicator-item badge badge-secondary"
        >${indicator}</span
      >
      <div class="w-${avatarSize} h-${avatarSize} rounded-lg outline-on-click">
        <img
          src="${threeAvatars[0]}"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
    ${
      threeAvatars.length >= 2
        ? `
    <div class="avatar">
      <div class="w-${avatarSize} h-${avatarSize} rounded-lg outline-on-click">
        <img
          src="${threeAvatars[1]}"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
    `
        : ''
    } ${
    threeAvatars.length >= 3
      ? `
    <div class="avatar">
      <div class="w-${avatarSize} h-${avatarSize} rounded-lg outline-on-click">
        <img
          src="${threeAvatars[2]}"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
    `
      : ''
  }
  </label>`;
}

/**Generates the dropdown menu that is created when you hover on a component */
function generateHover({
  numberOfIconsStacked,
  place_id,
  description,
  people,
}: {
  numberOfIconsStacked: number;
  place_id: string;
  description: string;
  people: (Person | PersonFromFacebook)[];
}): string {
  const placeTitle = `<li>
      <a class="justify-between" href="/places/${place_id}">
        ${description}
      </a>
    </li>`;
  return `<ul tabindex="0" class="menu menu-compact dropdown-content mt-${
    numberOfIconsStacked >= 3 ? '2.5' : numberOfIconsStacked
  } p-2 shadow bg-base-100 rounded-box w-52">
    ${placeTitle} 
    ${peopleToListItems(people)}
  </ul>`;
}

function linkForUserProfile(person: Person | PersonFromFacebook): string {
  // If person has no id, it must be from facebook
  if (!(<Person>person).id) return `/facebook/${(<PersonFromFacebook>person).email}`;
  // If person's id matches the current user's id, return the current user's profile
  if ((<Person>person).id === get(profileStore)?.id) return `/profile`;
  // Otherwise, return the person's profile
  return `/users/${(<Person>person).id}`;
}

function peopleToListItems(people: (Person | PersonFromFacebook)[]): string {
  return people
    .map(
      (person) => `<li>
      <a class="content-center" href="${linkForUserProfile(person)}">
        <div class="avatar">
          <div class="w-8 rounded-lg">
            <img src="${
              (<Person>person).avatar_url ?? (<PersonFromFacebook>person).image
            }" referrerpolicy="no-referrer" />
          </div>
        </div>
        <span class="text-xs">${
          (<Person>person).name ??
          `${(<PersonFromFacebook>person).first_name} ${(<PersonFromFacebook>person).last_name}`
        }</span>
      </a>
    </li>`
    )
    .join('');
}
