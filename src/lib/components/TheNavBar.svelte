<script lang="ts">
  import { signIn,signOut } from '$lib/stores/auth/authLoadingStore';
  import { profileStore } from '$lib/stores/auth/profileStore';
  </script>

<div class="drawer bg-base-100">
  <input id="main-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <!-- Page content here -->
    <header>
      <div class="navbar bg-base-100">
        <div class="flex-none">
          <label for="main-drawer" class="btn btn-square btn-ghost drawer-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-5 w-5 stroke-current"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
        </div>
        <div class="flex-1">
          <a sveltekit:prefetch href={$profileStore !== null ? '/map' : '/'} class="btn btn-ghost text-xl normal-case">
            Yalies.Me
          </a>
        </div>
        <div class="flex-none">
          <div class="dropdown-end dropdown">
            <label for="main-drawer " tabindex="0" class="btn btn-ghost btn-circle">
              <div class="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
                <span class="badge indicator-item badge-sm" />
              </div>
            </label>
            <div tabindex="0" class="card dropdown-content card-compact mt-3 w-52 bg-base-100 shadow">
              <div class="card-body">
                <span class="text-lg font-bold">Notifications</span>
                <span class="text-info">You'll see notifications here!</span>
                <div class="card-actions">
                  <button class="btn btn-primary btn-block">Hello!</button>
                </div>
              </div>
            </div>
          </div>
          <div title="Change Theme" class="dropdown-end dropdown ">
            <div tabindex="0" class="btn btn-ghost gap-1 normal-case">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                />
              </svg>
              <span class="hidden md:inline">Theme</span>
              <svg
                width="12px"
                height="12px"
                class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
              </svg>
            </div>

            <div
              class="dropdown-content rounded-t-box rounded-b-box top-px mt-16 h-[70vh] max-h-96 w-52 overflow-y-auto bg-base-200 text-base-content shadow-2xl"
            >
              <div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="yale"
                  data-act-class="outline"
                >
                  <div data-theme="yale" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">yale</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="light"
                  data-act-class="outline"
                >
                  <div data-theme="light" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">light</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="dark"
                  data-act-class="outline"
                >
                  <div data-theme="dark" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">dark</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="cupcake"
                  data-act-class="outline"
                >
                  <div data-theme="cupcake" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">cupcake</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="bumblebee"
                  data-act-class="outline"
                >
                  <div data-theme="bumblebee" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">bumblebee</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="emerald"
                  data-act-class="outline"
                >
                  <div data-theme="emerald" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">emerald</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="corporate"
                  data-act-class="outline"
                >
                  <div data-theme="corporate" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">corporate</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="synthwave"
                  data-act-class="outline"
                >
                  <div data-theme="synthwave" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">synthwave</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="retro"
                  data-act-class="outline"
                >
                  <div data-theme="retro" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">retro</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="cyberpunk"
                  data-act-class="outline"
                >
                  <div data-theme="cyberpunk" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">cyberpunk</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="valentine"
                  data-act-class="outline"
                >
                  <div data-theme="valentine" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">valentine</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="halloween"
                  data-act-class="outline"
                >
                  <div data-theme="halloween" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">halloween</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="garden"
                  data-act-class="outline"
                >
                  <div data-theme="garden" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">garden</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="forest"
                  data-act-class="outline"
                >
                  <div data-theme="forest" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">forest</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="aqua"
                  data-act-class="outline"
                >
                  <div data-theme="aqua" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">aqua</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="lofi"
                  data-act-class="outline"
                >
                  <div data-theme="lofi" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">lofi</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="pastel"
                  data-act-class="outline"
                >
                  <div data-theme="pastel" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">pastel</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="fantasy"
                  data-act-class="outline"
                >
                  <div data-theme="fantasy" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">fantasy</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="wireframe"
                  data-act-class="outline"
                >
                  <div data-theme="wireframe" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">wireframe</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="black"
                  data-act-class="outline"
                >
                  <div data-theme="black" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">black</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="luxury"
                  data-act-class="outline"
                >
                  <div data-theme="luxury" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">luxury</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="dracula"
                  data-act-class="outline"
                >
                  <div data-theme="dracula" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">dracula</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="cmyk"
                  data-act-class="outline"
                >
                  <div data-theme="cmyk" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">cmyk</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="autumn"
                  data-act-class="outline"
                >
                  <div data-theme="autumn" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">autumn</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="business"
                  data-act-class="outline"
                >
                  <div data-theme="business" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">business</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="acid"
                  data-act-class="outline"
                >
                  <div data-theme="acid" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">acid</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="lemonade"
                  data-act-class="outline"
                >
                  <div data-theme="lemonade" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">lemonade</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="night"
                  data-act-class="outline"
                >
                  <div data-theme="night" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">night</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="coffee"
                  data-act-class="outline"
                >
                  <div data-theme="coffee" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">coffee</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-base-content"
                  data-set-theme="winter"
                  data-act-class="outline"
                >
                  <div data-theme="winter" class="w-full cursor-pointer bg-base-100 font-sans text-base-content">
                    <div class="grid grid-cols-5 grid-rows-3">
                      <div class="col-span-5 row-span-3 row-start-1 flex gap-1 px-4 py-3">
                        <div class="flex-grow text-sm font-bold">winter</div>
                        <div class="flex flex-shrink-0 flex-wrap gap-1">
                          <div class="w-2 rounded bg-primary" />
                          <div class="w-2 rounded bg-secondary" />
                          <div class="w-2 rounded bg-accent" />
                          <div class="w-2 rounded bg-neutral" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="dropdown-end dropdown">
            <label tabindex="0" class="avatar btn btn-ghost btn-circle">
              <div class="w-10 rounded-full">
                <img
                  src={$profileStore?.avatar_url ?? 'https://api.lorem.space/image/face?hash=33791'}
                  alt="User Profile"
                  referrerpolicy="no-referrer"
                />
              </div>
            </label>
            <ul tabindex="0" class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
              <li>
                <a class="justify-between" sveltekit:prefetch href="/profile">Profile</a>
              </li>
              <li>
                <a class="justify-between" sveltekit:prefetch href="/map">Map</a>
              </li>
              <li>
                <a class="justify-between" sveltekit:prefetch href="/locations">
                  Locations
                  <span class="badge">New</span>
                </a>
              </li>
              {#if $profileStore !== null}
                <li>
                  <button on:click={signOut}>Logout</button>
                </li>
              {:else}
                <li>
                  <button on:click={signIn}>Login</button>
                </li>
              {/if}
            </ul>
          </div>
        </div>
      </div>
    </header>
    <main>
      <slot />
    </main>
  </div>
  <div class="drawer-side">
    <label for="main-drawer" class="drawer-overlay" />
    <ul class="menu w-80 overflow-y-auto bg-base-200 p-4 text-base-content">
      <!-- Sidebar content here -->
      <li>
        <a sveltekit:prefetch href="/places/New Haven, CT">Who's in New Haven</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/map">Map</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/locations">Locations</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/profile">Profile</a>
      </li>
      <li>
        <a sveltekit:prefetch href="/landing">Landing</a>
      </li>
      <!-- <li>
        <a sveltekit:prefetch href="">Ride Share</a>
      </li> -->
      <!-- <li>
        <a sveltekit:prefetch href="">Track Meals</a>
      </li> -->
      <li>
        <a sveltekit:prefetch href="/butteries">Butteries</a>
      </li>
    </ul>
  </div>
</div>

<style>
</style>
