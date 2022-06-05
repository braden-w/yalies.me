<script context="module" lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import { supabase } from '$lib/utils/supabaseClient';

  export async function load({ params }: { params: { id: string } }) {
    const { data, error } = await supabase
      .from<definitionsJSON['users_facebook_places']>('users_facebook_places')
      .select('*')
      .eq('id', params.id)
      .maybeSingle();
    if (error) return { status: error.code, props: { error } };
    return {
      status: 200,
      props: { userProfileInformation: { id: params.id, ...data } },
    };
  }
</script>

<script lang="ts">
  export let userProfileInformation: definitionsJSON['users_facebook_places'];
</script>

<svelte:head>
  <title>{userProfileInformation.name}</title>
  <meta name="description" content="Profile information" />
</svelte:head>

<div class="min-h-screen-nav hero bg-base-200">
  <div class="h-full w-full">
    <div
      id="component-demo"
      class="flex w-full grid-flow-row grid-cols-12 items-center gap-4 overflow-y-hidden overflow-x-scroll px-10 pt-1 pb-10 xl:grid xl:overflow-x-auto xl:px-4"
    >
      <div
        class="rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 place-items-center items-center gap-4 bg-base-100 p-4 py-8 shadow-xl xl:mx-0 xl:w-full"
      >
        <div class="dropdown">
          <div tabindex="0">
            <div class="avatar online">
              <div class="mask mask-squircle h-24 w-24 bg-base-content bg-opacity-10 p-px">
                <img
                  src={userProfileInformation.avatar_url}
                  alt="Avatar Tailwind CSS Component"
                  class="mask mask-squircle"
                  referrerpolicy="no-referrer"
                  width="94"
                  height="94"
                />
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="dropdown w-full">
            <div tabindex="0">
              <div class="text-center">
                <div class="text-lg font-extrabold">
                  {userProfileInformation?.name}
                </div>
                <div class="my-3 text-sm text-base-content/70">
                  Ethics, Politics, & Economics
                  <br />
                  Yale University
                  <br />
                  Student
                </div>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">card component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">
                    Card component is used to show products, features and more.
                  </p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/card" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown w-full">
            <div tabindex="0">
              <div class="mt-2 text-center">
                <div class="badge badge-ghost">Design</div>
                <div class="badge badge-ghost">Art</div>
                <div class="badge badge-ghost">Illustration</div>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">badge component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">
                    Use badge component to highlight small inline items
                  </p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/badge" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown-top dropdown">
          <div tabindex="0">
            <div class="btn-group">
              <button class="btn btn-accent btn-sm">Follow</button>
              <button aria-label="button component" class="btn btn-square btn-accent btn-sm">
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
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">button group component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">Use it to group multiple buttons together</p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/button-group" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="rounded-box col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col justify-center gap-4 bg-base-100 p-4 shadow-xl xl:mx-0 xl:w-full"
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
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="dropdown-top dropdown dropdown-end">
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
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      <div
        class="card card-compact col-span-3 row-span-4 mx-2 w-72 flex-shrink-0 overflow-visible bg-base-100 shadow-xl xl:card-normal xl:mx-0 xl:w-auto"
      >
        <div class="dropdown">
          <div tabindex="0">
            <figure>
              <img
                src="/tailwind-css-component-card-1.jpg"
                alt="Card Tailwind CSS Component"
                class="rounded-t-box"
                referrerpolicy="no-referrer"
                width="300"
                height="187"
              />
            </figure>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">card component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">
                  Card component is used to show products, features and more.
                </p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/card" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-title flex items-center font-extrabold">
            Card Component
            <div class="dropdown-top dropdown dropdown-end">
              <div tabindex="0">
                <div tabindex="0" class="btn btn-circle btn-ghost btn-xs mx-1 inline-block text-info">
                  <svg
                    width="20"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline h-5 w-5 stroke-current"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <div tabindex="0" class="dropdown-content py-2">
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                  <div class="card-body">
                    <h2 class="card-title font-extrabold capitalize">dropdown component</h2>
                    <p class="text-sm text-neutral-content text-opacity-80">
                      helper dropdown can show an element when focused.
                    </p>
                    <div class="mt-4 flex justify-end">
                      <a href="/components/dropdown" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown w-full">
            <div tabindex="0">
              <div class="mb-2">
                <div class="badge badge-ghost">May 14th</div>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">badge component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">
                    Use badge component to highlight small inline items
                  </p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/badge" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p class="text-sm text-base-content text-opacity-80">
            Use card component to easily show blog posts, products, features, items and more.
          </p>
          <div class="card-actions justify-end">
            <div class="dropdown-top dropdown dropdown-end">
              <div tabindex="0">
                <button class="btn btn-primary">Get Started</button>
              </div>
              <div tabindex="0" class="dropdown-content py-2">
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      </div>
      <div class="col-span-3 row-span-3 mx-2 flex w-72 flex-shrink-0 flex-col xl:mx-0 xl:w-full">
        <div class="dropdown">
          <div tabindex="0" class="bg-opacity-100">
            <div class="tabs w-full flex-grow-0">
              <button class="tab tab-active tab-lifted tab-border-none tab-lg flex-1">Stats</button>
              <button class="tab tab-lifted tab-border-none tab-lg flex-1">Info</button>
              <button class="tab tab-lifted tab-border-none tab-lg flex-1">Options</button>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">tab component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">Beautiful tabs to switch between sections</p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/tab" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid w-full flex-grow gap-3 rounded-xl rounded-tl-none bg-base-100 p-6 shadow-xl">
          <div class="flex items-center space-x-2">
            <div class="dropdown">
              <div tabindex="0">
                <div class="avatar online">
                  <div class="mask mask-hexagon h-16 w-16 bg-base-content bg-opacity-10 p-px">
                    <img
                      src={userProfileInformation.avatar_url}
                      alt="Avatar Tailwind CSS Component"
                      class="mask mask-hexagon"
                      referrerpolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
              <div tabindex="0" class="dropdown-content py-2">
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="text-lg font-extrabold">Audience Report</div>
          <div class="grid gap-3">
            <div class="dropdown-top dropdown">
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
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      </div>
      <div class="col-span-3 row-span-1 mx-2 flex w-72 flex-shrink-0 flex-col justify-center xl:mx-0 xl:w-auto">
        <div class="dropdown dropdown-end w-full">
          <div tabindex="0">
            <div class="flex items-center justify-between">
              <div class="avatar online">
                <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
                  <img
                    src={userProfileInformation.avatar_url}
                    alt="Avatar Tailwind CSS Component"
                    class="mask mask-squircle"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
              <div class="avatar online">
                <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
                  <img
                    src={userProfileInformation.avatar_url}
                    alt="Avatar Tailwind CSS Component"
                    class="mask mask-squircle"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
              <div class="avatar offline">
                <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
                  <img
                    src={userProfileInformation.avatar_url}
                    alt="Avatar Tailwind CSS Component"
                    class="mask mask-squircle"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
              <div class="avatar">
                <div class="mask mask-squircle h-16 w-16 bg-base-100 p-1">
                  <img
                    src={userProfileInformation.avatar_url}
                    alt="Avatar Tailwind CSS Component"
                    class="mask mask-squircle"
                    referrerpolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      </div>
      <div
        class="rounded-box col-span-3 row-span-4 mx-2 grid w-72 flex-shrink-0 bg-base-100 text-base-content shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch"
      >
        <div class="grid w-full grid-cols-1 gap-4 p-4">
          <div class="dropdown">
            <div tabindex="0">
              <div class="grid w-full grid-cols-2 gap-4">
                <button class="btn btn-block">Neutral</button>
                <button class="btn btn-primary btn-block">primary</button>
                <button class="btn btn-secondary btn-block">secondary</button>
                <button class="btn btn-accent btn-block">accent</button>
                <button class="btn btn-info btn-block">info</button>
                <button class="btn btn-success btn-block">success</button>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="dropdown-top dropdown">
            <div tabindex="0">
              <div class="grid w-full grid-cols-2 gap-4">
                <button class="btn btn-warning btn-block">warning</button>
                <button class="btn btn-error btn-block">error</button>
                <button class="btn btn-outline btn-block">outline</button>
                <button class="btn btn-outline btn-primary btn-block">primary</button>
                <button class="btn btn-outline btn-secondary btn-block">secondary</button>
                <button class="btn btn-outline btn-accent btn-block">accent</button>
                <button class="btn btn-ghost btn-block">ghost</button>
                <button class="btn btn-link btn-block">link</button>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      <div class="col-span-3 row-span-2 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto">
        <div class="dropdown-top dropdown dropdown-end">
          <div tabindex="0">
            <div class="grid gap-4">
              <div class="btn-group flex">
                <button class="btn flex-1">1</button>
                <button class="btn btn-active flex-1">2</button>
                <button class="btn flex-1">3</button>
                <button class="btn flex-1">4</button>
                <button class="btn flex-1">5</button>
              </div>
              <div class="btn-group flex">
                <button class="btn btn-outline flex-1">1</button>
                <button class="btn btn-outline flex-1">2</button>
                <button class="btn btn-outline flex-1">3</button>
                <button class="btn btn-outline flex-1">4</button>
                <button class="btn btn-outline flex-1">5</button>
              </div>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">pagination component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">Pagination buttons in many colors and sizes!</p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/pagination" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="dropdown-top dropdown dropdown-end">
          <div tabindex="0">
            <div class="tabs tabs-boxed items-center">
              <button class="tab flex-1">Tab 1</button>
              <button class="tab tab-active flex-1">Tab 2</button>
              <button class="tab flex-1">Tab 3</button>
            </div>
          </div>
          <div tabindex="0" class="dropdown-content py-2">
            <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
              <div class="card-body">
                <h2 class="card-title font-extrabold capitalize">tab component</h2>
                <p class="text-sm text-neutral-content text-opacity-80">Tab component with several sizes and styles</p>
                <div class="mt-4 flex justify-end">
                  <a href="/components/tab" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="rounded-box col-span-3 row-span-3 mx-2 grid w-72 flex-shrink-0 items-stretch bg-base-100 text-base-content shadow-xl xl:mx-0 xl:w-auto xl:place-self-stretch"
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
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="dropdown-top dropdown dropdown-end">
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
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="dropdown-top dropdown dropdown-end">
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
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      <div class="col-span-3 row-span-2 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto xl:place-self-stretch">
        <div class="rounded-box bg-base-100 text-base-content shadow-xl">
          <div class="dropdown dropdown-end w-full">
            <div tabindex="0">
              <ul class="menu overflow-visible p-3">
                <li class="menu-title">
                  <span>Menu Title</span>
                </li>
                <li>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="mr-2 inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                    Menu Item 1
                  </button>
                </li>
                <li>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="mr-2 inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                    Menu Item 2
                  </button>
                </li>
                <li>
                  <button>
                    <svg
                      width="20"
                      height="20"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="mr-2 inline-block h-5 w-5 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                      />
                    </svg>
                    Menu Item 3
                    <div class="badge badge-success">new</div>
                  </button>
                </li>
              </ul>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">menu component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">
                    Use it for sidebar or any other list of items
                  </p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/menu" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 row-span-1 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto">
        <div class="rounded-box bg-base-100 text-base-content shadow-xl">
          <div class="dropdown-top dropdown dropdown-end w-full">
            <div tabindex="0">
              <div class="flex justify-center gap-8 p-4">
                <label aria-label="checkbox CSS component">
                  <input type="checkbox" class="checkbox" />
                </label>
                <label aria-label="checkbox CSS component">
                  <input type="checkbox" class="checkbox checkbox-primary" />
                </label>
                <label aria-label="checkbox CSS component">
                  <input type="checkbox" class="checkbox checkbox-secondary" />
                </label>
                <label aria-label="checkbox CSS component">
                  <input type="checkbox" class="checkbox checkbox-accent" />
                </label>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">checkbox component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">Colorful, animated and accessible</p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/checkbox" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown dropdown-end w-full">
            <div tabindex="0">
              <div class="rating rating-lg rating-half w-full justify-center px-4 pb-4">
                <input type="radio" aria-label="Rating reset" name="rating-10" class="rating-hidden" />
                <input
                  type="radio"
                  aria-label="Rating half star"
                  name="rating-10"
                  class="mask mask-half-1 mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  aria-label="Rating 1 star"
                  name="rating-10"
                  class="mask mask-half-2 mask-star-2 bg-green-500"
                />
                <div class="w-1" />
                <input
                  type="radio"
                  aria-label="Rating 1 and half star"
                  name="rating-10"
                  class="mask mask-half-1 mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  aria-label="Rating 2 star"
                  name="rating-10"
                  class="mask mask-half-2 mask-star-2 bg-green-500"
                />
                <div class="w-1" />
                <input
                  type="radio"
                  aria-label="Rating 2 and half star"
                  name="rating-10"
                  class="mask mask-half-1 mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  aria-label="Rating 3 star"
                  name="rating-10"
                  class="mask mask-half-2 mask-star-2 bg-green-500"
                />
                <div class="w-1" />
                <input
                  type="radio"
                  aria-label="Rating 3 and half star"
                  name="rating-10"
                  class="mask mask-half-1 mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  aria-label="Rating 4 star"
                  name="rating-10"
                  class="mask mask-half-2 mask-star-2 bg-green-500"
                />
                <div class="w-1" />
                <input
                  type="radio"
                  aria-label="Rating 4 and half star"
                  name="rating-10"
                  class="mask mask-half-1 mask-star-2 bg-green-500"
                />
                <input
                  type="radio"
                  aria-label="Rating 5 star"
                  name="rating-10"
                  class="mask mask-half-2 mask-star-2 bg-green-500"
                />
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">Rating component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">Styled radio buttons</p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/rating" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-3 row-span-1 mx-2 grid w-72 flex-shrink-0 gap-4 xl:mx-0 xl:w-auto">
        <div class="rounded-box flex items-center bg-neutral text-neutral-content shadow-xl">
          <div class="dropdown-top dropdown">
            <div tabindex="0">
              <div class="breadcrumbs px-4 text-sm">
                <ul>
                  <li>
                    <a href="/">
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="mr-2 h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                        />
                      </svg>
                      Documents
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="mr-2 h-4 w-4 stroke-current"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Add Document
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content py-2">
              <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                <div class="card-body">
                  <h2 class="card-title font-extrabold capitalize">breadcrumbs component</h2>
                  <p class="text-sm text-neutral-content text-opacity-80">Make a better navigation with breadcrumbs!</p>
                  <div class="mt-4 flex justify-end">
                    <a href="/components/breadcrumbs" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="rounded-box flex items-center bg-accent p-4 text-accent-content shadow-xl">
          <div class="flex-1 px-2">
            <h2 class="text-3xl font-extrabold">4,600</h2>
            <p class="text-sm text-opacity-80">Page views</p>
          </div>
          <div class="flex-0">
            <div class="dropdown-top dropdown dropdown-end">
              <div tabindex="0">
                <div class="flex space-x-1">
                  <button aria-label="button component" class="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-6 w-6 stroke-current"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </button>
                  <button aria-label="button component" class="btn btn-square btn-ghost">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      class="inline-block h-6 w-6 stroke-current"
                    >
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
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      </div>
      <div
        class="card col-span-3 row-span-1 mx-2 w-72 flex-shrink-0 overflow-visible bg-base-100 shadow-lg xl:mx-0 xl:w-auto xl:place-self-stretch"
      >
        <div class="card-body flex-row items-center space-x-4 px-4">
          <div class="flex-1">
            <h2 class="card-title mb-0 flex">
              <div class="dropdown-top dropdown">
                <div tabindex="0">
                  <button aria-label="loading button" class="btn btn-circle loading btn-ghost btn-sm" />
                </div>
                <div tabindex="0" class="dropdown-content py-2">
                  <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
                    <div class="card-body">
                      <h2 class="card-title font-extrabold capitalize">loading button component</h2>
                      <p class="text-sm text-neutral-content text-opacity-80">
                        Buttons can get loadings state using a simple class
                      </p>
                      <div class="mt-4 flex justify-end">
                        <a href="/components/button" class="btn btn-primary btn-sm xl:btn-md">See component</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              Downloading...
            </h2>
            <div class="dropdown-top dropdown w-full">
              <div tabindex="0">
                <progress max="100" class="progress progress-secondary" value="70" />
              </div>
              <div tabindex="0" class="dropdown-content py-2">
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
          <div class="flex-0">
            <div class="dropdown-top dropdown dropdown-end">
              <div tabindex="0">
                <button aria-label="circle button component" class="btn btn-circle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-6 w-6 stroke-current"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div tabindex="0" class="dropdown-content py-2">
                <div class="card compact rounded-box w-72 bg-neutral-focus text-neutral-content shadow-xl">
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
      </div>
    </div>
  </div>
</div>
<!-- <div class="divider divider-horizontal">OR</div> -->
