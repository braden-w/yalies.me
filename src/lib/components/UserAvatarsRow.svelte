<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';

  export let avatar_url: definitionsJSON['users_facebook_places']['avatar_url'] = '';
</script>

<div class="mx-2 flex w-72 flex-shrink-0 flex-col justify-center xl:mx-0 xl:w-full">
  <div class="flex items-center justify-between">
    <div class="avatar online">
      <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
        <img
          src={avatar_url}
          alt="Avatar Tailwind CSS Component"
          class="mask mask-squircle"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
    <div class="avatar online">
      <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
        <img
          src={avatar_url}
          alt="Avatar Tailwind CSS Component"
          class="mask mask-squircle"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
    <div class="avatar offline">
      <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
        <img
          src={avatar_url}
          alt="Avatar Tailwind CSS Component"
          class="mask mask-squircle"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
    <div class="avatar">
      <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
        <img
          src={avatar_url}
          alt="Avatar Tailwind CSS Component"
          class="mask mask-squircle"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
  </div>
</div>
