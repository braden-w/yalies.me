<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';

  export let places: definitionsJSON['users_facebook_places'][] | null;
</script>

<table class="table w-full">
  <!-- head -->
  <thead>
    <tr>
      <th />
      <th>Name</th>
      <th>People</th>
      <th />
    </tr>
  </thead>
  <tbody>
    <!-- row 1 -->
    {#if places}
      {#each places as place, index}
        <tr class="hover" id={place.place_id}>
          <th>
            {index + 1}
          </th>
          <td>{place.description}</td>
          <td class="overflow-visible">
            <div class="avatar-group -space-x-2 overflow-visible">
              {#each place?.people as person}
                <div class="avatar h-8 w-8">
                  <img src={person.avatar_url} alt={person.name} />
                </div>
              {/each}
            </div>

            <!-- {getPeopleNames(place)} -->
          </td>
          <th>
            <a href={`/places/${place.place_id}`} class="btn btn-primary btn-md">Go to Place</a>
          </th>
        </tr>
      {/each}
    {/if}
  </tbody>
  <!-- foot -->
  <tfoot />
</table>
