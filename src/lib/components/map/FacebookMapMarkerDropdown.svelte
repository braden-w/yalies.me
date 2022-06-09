<script lang="ts">
import type { Feature } from '$lib/stores/map/facebook';

  export let place: Feature;
</script>

<label tabindex="0" name="selected" class="stack">
    <span class="badge indicator-item badge-secondary">{place.properties.people.length}</span>
</label>
<div class="dropdown-hover dropdown">
  <ul
    tabindex="0"
    class="dropdown-content menu menu-compact mt-{2} rounded-box w-52 bg-base-100 p-2 shadow"
  >
    <li>
      <a class="justify-between" href="/places/{place.properties.place_id}">
        {place.properties.description}
      </a>
    </li>
    {#each place.properties.people as person}
      <li>
        <a class="content-center">
        <!-- <a class="content-center" href={linkForUserProfile(person)}> -->
          <div class="avatar">
            <div class="w-8 rounded-lg">
              <img src={person.avatar_url} referrerpolicy="no-referrer" alt="Avatar" />
            </div>
          </div>
          <span class="text-xs">{person.name}</span>
        </a>
      </li>
    {/each}
  </ul>
</div>
