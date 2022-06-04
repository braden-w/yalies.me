<script lang="ts">
  import InstagramIcon from '$lib/components/icons/InstagramIcon.svelte';
  import InterestsIcon from '$lib/components/icons/InterestsIcon.svelte';
  import LinkedInIcon from '$lib/components/icons/LinkedInIcon.svelte';
  import MajorIcon from '$lib/components/icons/MajorIcon.svelte';
  import PhoneIcon from '$lib/components/icons/PhoneIcon.svelte';
  import SpotifyIcon from '$lib/components/icons/SpotifyIcon.svelte';
  import { profileStore,uploadUserResponses } from '$lib/stores/auth/profileStore';
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import { get } from 'svelte/store';
  
  export let userProfileInformation: definitionsJSON['users_facebook_places'] | null;

  /** Set this to true if this userCard refers to the currrent logged in user */
  export let isCurrentUser = userProfileInformation?.id === get(profileStore)?.id;
  const inputsList = [
    // {
    //   name: 'university',
    //   label: 'University',
    //   icon: UniversityIcon,
    //   value: 'Yale University'
    // },
    {
      name: 'major',
      label: 'Major',
      icon: MajorIcon,
      value: userProfileInformation?.major ?? '',
    },
    {
      name: 'interests',
      label: 'Interests',
      icon: InterestsIcon,
      value: userProfileInformation?.interests ?? '',
    },
    {
      name: 'phone',
      label: 'Phone',
      icon: PhoneIcon,
      value: userProfileInformation?.phone ?? '',
    },
  ];
  const userIntegrations = [
    {
      name: 'instagram',
      label: 'Instagram Handle',
      icon: InstagramIcon,
      value: userProfileInformation?.instagram ?? '',
    },
    {
      name: 'linkedin',
      label: 'LinkedIn',
      icon: LinkedInIcon,
      value: userProfileInformation?.linkedin ?? '',
    },
    {
      name: 'expression',
      label: 'Spotify',
      icon: SpotifyIcon,
      value: userProfileInformation?.expression ?? '',
    },
  ];

  let isApplySettingsLoading = false;
  async function applySettings(responsesList = [...inputsList, ...userIntegrations]) {
    isApplySettingsLoading = true;
    console.log('🚀 ~ file: UserResponsesCard.svelte ~ line 76 ~ responsesList', responsesList);
    let accumulator: { [key: string]: string; user_response_id: string } = {
      user_response_id: $profileStore?.user_response_id ?? '',
    };
    let payload: definitionsJSON['user_responses'] = responsesList.reduce(
      (obj, item) => ((obj[item.name] = item.value), obj),
      accumulator
    );

    // Upload payload to the database
    await uploadUserResponses(payload);
    isApplySettingsLoading = false;
  }
</script>

<div
  class="rounded-box row-span-3 mx-2 flex flex-shrink-0 flex-col justify-center gap-4 bg-base-100 p-4 shadow-xl xl:mx-0 xl:w-full"
>
  <div class="px-6 pt-6">
    <div class="text-xl font-extrabold">About Me</div>
    <div class="my-4 text-xs text-base-content/70" />

    {#each inputsList as { name, label, icon, value }}
      <div class="form-control">
        <label class="label" for={name}>
          <span class="label-text">{label}</span>
          <svelte:component this={icon} />
        </label>
        <input
          tabindex="0"
          type="text"
          id={name}
          class="input input-bordered"
          disabled={!isCurrentUser}
          placeholder={isCurrentUser ? 'Start typing your response here...' : 'n/a'}
          bind:value
        />
      </div>
    {/each}
    <div class="divider" />
    <div class="text-xl font-extrabold">Social Media</div>
    <div class="my-4 text-xs text-base-content/70">Instagram Handle, LinkedIn URL, and Spotify URL go here</div>
    {#each userIntegrations as { name, label, icon, value }}
      <div class="form-control">
        <label class="label" for={name}>
          <span class="label-text">{label}</span>
          <svelte:component this={icon} />
        </label>
        <input
          tabindex="0"
          type="text"
          id={name}
          class="input input-bordered"
          disabled={!isCurrentUser}
          placeholder={isCurrentUser ? 'Start typing your response here...' : 'n/a'}
          bind:value
        />
      </div>
    {/each}
  </div>
  {#if isCurrentUser}
    <div class="form-control">
      <div class="divider" />
      <button
        class="btn btn-secondary btn-block space-x-2"
        class:loading={isApplySettingsLoading}
        on:click={() => applySettings([...inputsList, ...userIntegrations])}
      >
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
  {/if}
</div>
