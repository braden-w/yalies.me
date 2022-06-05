<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';

  export let users: definitionsJSON['users_facebook_places'][] = [];
</script>

<div class="carousel-center carousel rounded-box justify-center space-x-4 bg-neutral p-4">
  {#each users as user}
    <div class="carousel-item">
      <div class="avatar">
        <div class="mask mask-squircle w-8">
          <a href={`#${user.id}`}>
            <img src={user.avatar_url} alt="Profile" height="100%" width="100%" referrerpolicy="no-referrer" />
          </a>
        </div>
      </div>
      <figure />
    </div>
  {/each}
</div>
