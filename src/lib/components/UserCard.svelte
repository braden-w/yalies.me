<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';

  export let userProfileInformation: definitionsJSON['users_facebook_places'] | null;
</script>

<div class="rounded-box grid place-items-center items-center gap-4 bg-base-100 p-4 py-8 shadow-xl xl:mx-0 xl:w-full">
  <div class="avatar online">
    <div class="mask mask-squircle h-24 w-24 bg-base-content bg-opacity-10 p-px">
      <img
        src={userProfileInformation?.avatar_url}
        alt="Avatar Tailwind CSS Component"
        class="mask mask-squircle"
        referrerpolicy="no-referrer"
        width="94"
        height="94"
      />
    </div>
  </div>

  <div>
    <div class="text-center">
      <div class="text-lg font-extrabold">
        {userProfileInformation?.name}
      </div>
      <div class="my-3 text-sm text-base-content/70">
        {#if userProfileInformation?.major}
          {userProfileInformation?.major}
          <br />
        {/if}
      </div>
    </div>

    <div class="mt-2 text-center">
      {#if userProfileInformation?.school}
        <div class="badge badge-ghost">{userProfileInformation?.school}</div>
      {/if}
      {#if userProfileInformation?.college}
        <div class="badge badge-ghost">
          {userProfileInformation?.college}
        </div>
      {/if}
    </div>
  </div>
  <div class="dropdown-top dropdown">
    <div tabindex="0">
      <div class="btn-group">
        <button class="btn btn-accent btn-sm">Add Friend</button>
        <button aria-label="button component" class="btn btn-accent btn-square btn-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 stroke-current">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div tabindex="0" class="dropdown-content py-2">
      <div class="card compact rounded-box w-52 bg-neutral-focus text-neutral-content shadow-xl">
        <div class="card-body">
          <h2 class="card-title font-extrabold capitalize">Keep Track of People I Met</h2>
          <p class="text-sm text-neutral-content text-opacity-80">Coming Soon!</p>
          <div class="mt-4 flex">
            <a href="mailto:braden.wong@yale.edu" class="btn btn-primary btn-sm">Request Feature</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
