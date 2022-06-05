<script lang="ts">
  import SignInGoogleButton from './SignInGoogleButton.svelte';
  const photoNames = [
    'LocationsTable.png',
    'LocationsList.png',
    'Map.png',
    'Profile.png',
    'Profile Other.png',
    'New Haven.png',
    'New Haven In.png',
  ];

  const photoFilePaths = photoNames.map((name) => `/photos/${name}`);
  const albumURL = 'https://imgur.com/a/vSfU9c6';
  const photoURLs = [
    'https://i.imgur.com/O7KS8N5.png',
    'https://i.imgur.com/8VIWiMd.png',
    'https://i.imgur.com/63FnRQX.png',
    'https://i.imgur.com/eyq1wEn.png',
    'https://i.imgur.com/tVZGAKh.png',
    'https://i.imgur.com/PzEQtAG.png',
  ];

  export let loading: boolean;
</script>

<div class="min-h-screen-nav hero mx-auto max-w-md bg-base-100 text-base-content md:max-w-full">
  <div class="hero-overlay bg-opacity-60" />
  <div class="hero-content px-4 text-center md:px-0">
    <div>
      <h2 class="mt-32 mb-2 text-4xl font-extrabold md:text-6xl">Yalies.Me</h2>
      <h3 class="mb-5 text-3xl font-bold">An app that solves a single question: who is in my area?</h3>
      <p class="mx-auto w-full max-w-xl">Quickly browse a map, list of users, and cities to see who is in your area.</p>
      <section class="overflow-hidden text-gray-700">
        <div class="container mx-auto px-5 py-2 lg:px-32 lg:py-8">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <video
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://i.imgur.com/0uL1zb2.mp4"
                  autoplay
                  playsinline
                  loop
                  muted
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="Gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={photoURLs[1]}
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="Gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={photoURLs[2]}
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="Gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={photoURLs[3]}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="Gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={photoURLs[4]}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="Gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={photoURLs[5]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="mb-36 flex w-full justify-center">
        <SignInGoogleButton {loading} />
      </div>
    </div>
  </div>
</div>
