<script lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import InstagramIcon from './icons/InstagramIcon.svelte';
  import LinkedInIcon from './icons/LinkedInIcon.svelte';
  import SpotifyIcon from './icons/SpotifyIcon.svelte';

  export let userProfileInformation: definitionsJSON['users_facebook_places'] | null;
</script>

<div class="mt-2 text-center">
  {#if userProfileInformation?.email}
    <a class="btn btn-circle btn-sm" href={`mailto:${userProfileInformation?.email}`}>
      <!-- Make an svg email icon -->
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </a>
  {/if}
  {#if userProfileInformation?.phone}
    <a class="btn btn-circle btn-sm" href={`sms:${userProfileInformation?.phone}`}>
      <!-- Make a svg phone icon -->
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    </a>
  {/if}

  {#if userProfileInformation?.expression}
    <a class="btn btn-circle btn-sm" target="_blank" href={userProfileInformation?.expression}>
      <!-- Make a Green Spotify Icon -->
      <SpotifyIcon />
    </a>
  {/if}
  {#if userProfileInformation?.instagram}
    <a
      class="btn btn-circle btn-sm"
      target="_blank"
      href={`https://www.instagram.com/${userProfileInformation?.instagram}/`}
    >
      <!-- Make an Instagram SVG Icon -->
      <InstagramIcon />
    </a>
  {/if}
  {#if userProfileInformation?.linkedin}
    <a class="btn btn-circle btn-sm" target="_blank" href={userProfileInformation?.linkedin}>
      <!-- Make an LinkedIn SVG Icon -->
      <LinkedInIcon />
    </a>
  {/if}
</div>
