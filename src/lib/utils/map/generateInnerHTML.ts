import { profileStore } from '$lib/stores/auth/profileStore';
import type { Person, PersonFromFacebook } from '$lib/types/definitionsJSON';
import { get } from 'svelte/store';

/**Generates the dropdown menu that is created when you hover on a component */
export function generateHover({
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
              (<Person>person).avatar_url ?? (<PersonFromFacebook>person).avatar_url
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
