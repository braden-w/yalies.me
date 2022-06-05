<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';

  export let avatar_url: definitionsJSON['users_facebook_places']['avatar_url'] = '';
  let tab = 0;
</script>

<div class="col-span-3 row-span-3 mx-2 flex flex-shrink-0 flex-col xl:mx-0 xl:w-full">
  <div class="tabs w-full flex-grow-0">
    <button
      class="tab tab-lifted tab-border-none tab-lg flex-1"
      class:tab-active={tab === 0}
      on:click={() => (tab = 0)}
    >
      Stats
    </button>
    <button
      class="tab tab-lifted tab-border-none tab-lg flex-1"
      class:tab-active={tab === 1}
      on:click={() => (tab = 1)}
    >
      Info
    </button>
    <button
      class="tab tab-lifted tab-border-none tab-lg flex-1"
      class:tab-active={tab === 2}
      on:click={() => (tab = 2)}
    >
      Options
    </button>
  </div>

  <!-- Begin Tab Page 0 -->
  {#if tab === 0}
    <div class="grid w-full flex-grow gap-3 rounded-xl rounded-tl-none bg-base-100 p-6 shadow-xl">
      <div class="flex items-center space-x-2">
        <div class="dropdown">
          <div tabindex="0">
            <div class="avatar online">
              <div class="mask mask-hexagon h-16 w-16 bg-base-content bg-opacity-10 p-px">
                <img
                  src={avatar_url}
                  alt="Avatar Tailwind CSS Component"
                  class="mask mask-hexagon"
                  referrerpolicy="no-referrer"
                />
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">avatar component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">Use avatar component with any size</p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/avatar" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="text-lg font-extrabold">Braden Wong</div>
          <div class="text-sm text-base-content/70">220 Followers</div>
        </div>
      </div>
      <div class="dropdown">
        <div tabindex="0">
          <div class="divider m-0 text-base-content/60">Reports</div>
        </div>
        <div tabindex="0" class="dropdown-content py-2">
          <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
            <div class="card-body">
              <h2 class="card-title font-extrabold capitalize">divider component</h2>
              <p class="text-sm text-neutral-content text-opacity-80">
                User divider component to visually separate items
              </p>
              <div class="mt-4 flex justify-end">
                <a href="/components/divider" class="btn btn-primary btn-sm xl:btn-md">See component</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-lg font-extrabold">Follower Report</div>
      <div class="grid gap-3">
        <div class="dropdown dropdown-top">
          <div tabindex="0">
            <div class="flex items-center p-1">
              <span class="w-48 text-xs text-base-content/70">Search Engines</span>
              <progress max="100" class="progress progress-success" value="50" />
            </div>
            <div class="flex items-center p-1">
              <span class="w-48 text-xs text-base-content/70">Direct</span>
              <progress max="100" class="progress progress-primary" value="30" />
            </div>
            <div class="flex items-center p-1">
              <span class="w-48 text-xs text-base-content/70">Social Media</span>
              <progress max="100" class="progress progress-secondary" value="70" />
            </div>
            <div class="flex items-center p-1">
              <span class="w-48 text-xs text-base-content/70">Emails</span>
              <progress max="100" class="progress progress-accent" value="90" />
            </div>
            <div class="flex items-center p-1">
              <span class="w-48 text-xs text-base-content/70">Ad campaigns</span>
              <progress max="100" class="progress progress-warning" value="65" />
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">progress component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">
                  Show progressbar, loadings or simple bar charts using progress component
                </p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/progress" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
  <!-- Begin Tab Page 1 -->
  {#if tab === 1}
    <div
      class="rounded-box col-span-3 row-span-3 mx-2 grid flex-shrink-0 items-stretch bg-base-100 text-base-content shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch"
    >
      <div class="grid place-content-center gap-4 p-4">
        <div class="dropdown dropdown-end">
          <div tabindex="0">
            <div class="alert flex-col space-y-2">
              <div class="flex-1">
                <span class="mx-3 text-sm">Lorem ipsum dolor sit amet, consectetur adip!</span>
              </div>
              <div class="flex-none">
                <button class="btn btn-outline btn-primary btn-sm mr-2">Cancel</button>
                <button class="btn btn-primary btn-sm">Apply</button>
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">alert component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">
                  Show alerts, warnings, notification or other info
                </p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/alert" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end dropdown-top">
          <div tabindex="0">
            <div class="alert alert-info">
              <div class="flex-1">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="mx-2 h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adip!</span>
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">alert component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">
                  Show alerts, warnings, notification or other info
                </p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/alert" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown dropdown-end dropdown-top">
          <div tabindex="0">
            <div class="alert alert-success">
              <div class="flex-1">
                <svg
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="mx-2 h-6 w-6 stroke-current"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                <span class="text-sm">Lorem ipsum dolor sit amet, consectetur adip!</span>
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">alert component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">
                  Show alerts, warnings, notification or other info
                </p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/alert" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
  <!-- Begin Tab Page 2 -->
  {#if tab === 2}
    <div
      class="rounded-box col-span-3 row-span-3 mx-2 flex flex-shrink-0 flex-col justify-center gap-4 bg-base-100 p-4 shadow-xl xl:mx-0 xl:w-full"
    >
      <div class="px-6 pt-6">
        <div class="text-xl font-extrabold">Superpower settings</div>
        <div class="my-4 text-xs text-base-content/70">
          Enable your favorite superpowers. Terms and conditions apply
        </div>
        <div class="dropdown w-full flex-1">
          <div tabindex="0">
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Enable teleportation</span>
                <input type="checkbox" class="toggle toggle-primary" />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Enable time travel</span>
                <input type="checkbox" class="toggle toggle-secondary" />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Enable laser eyes</span>
                <input type="checkbox" class="toggle toggle-accent" />
              </label>
            </div>
            <div class="form-control">
              <label class="label cursor-pointer">
                <span class="label-text">Enable immortality</span>
                <input type="checkbox" class="toggle" />
              </label>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">toggle component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">Use toggle to switch between two states</p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/toggle" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="form-control">
        <div class="dropdown dropdown-end dropdown-top">
          <div tabindex="0">
            <button class="btn btn-secondary btn-block space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="h-6 w-6 stroke-current">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Apply settings</span>
            </button>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">button component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">
                  Buttons come in various shapes, colors and sizes
                </p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/button" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
