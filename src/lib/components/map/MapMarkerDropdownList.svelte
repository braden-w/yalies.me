<!-- @component Generates the dropdown menu that is created when you hover on a component -->
<script lang="ts">
  import { profileStore } from '$lib/stores/auth/profileStore';
  import type { Person, PersonFromFacebook } from '$lib/types/definitionsJSON';
  import { get } from 'svelte/store';

  export let numberOfIconsStacked: number;
  export let place_id: string;
  export let description: string;
  export let people: (Person | PersonFromFacebook)[];

  function linkForUserProfile(person: Person | PersonFromFacebook): string {
    // If person has no id, it must be from facebook
    if (!(<Person>person).id) return `/facebook/${(<PersonFromFacebook>person).email}`;
    // If person's id matches the current user's id, return the current user's profile
    if ((<Person>person).id === get(profileStore)?.id) return `/profile`;
    // Otherwise, return the person's profile
    return `/users/${(<Person>person).id}`;
  }
</script>

<ul
  tabindex="0"
  class="dropdown-content menu menu-compact mt-{numberOfIconsStacked >= 3
    ? '2.5'
    : numberOfIconsStacked} rounded-box w-52 bg-base-100 p-2 shadow"
>
  <li>
    <a class="justify-between" href="/places/{place_id}">
      {description}
    </a>
  </li>
  {#each people as person}
    <li>
      <a class="content-center" href={linkForUserProfile(person)}>
        <div class="avatar">
          <div class="w-8 rounded-lg">
            <img src={person.avatar_url} referrerpolicy="no-referrer" alt="Avatar" />
          </div>
        </div>
        <span class="text-xs">{person.name ?? `${person.first_name} ${person.last_name}`}</span>
      </a>
    </li>
  {/each}
</ul>
