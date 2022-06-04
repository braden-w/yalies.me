<script context="module" lang="ts">
  // If the user email doesn't end with .edu, throw an error and redirect to sign in page
  function emailIsEdu(user: User): boolean {
    if (!user?.email) return false;
    const email = user.email.toLowerCase();
    return email.endsWith('.edu');
  }

  function redirectIfUserNullOrNotEdu(user: User | null) {
    // Get login state on page load
    if (!user) return;
    if (!emailIsEdu(user)) {
      signOut();
      alert('Please sign in with a .edu email address');
    }
  }

  /** Upload profile data from profileStore to 'users' database */
  async function uploadProfileDataToSupabase(payload: definitionsJSON['users'] | null) {
    if (!payload) return;
    try {
      const { data, error } = await supabase.from<definitionsJSON['users']>('users').upsert(payload);
      console.log('🚀 ~ file: __layout.svelte ~ line 58 ~ const{data,error}=awaitsupabase.from ~ data', data);
      if (error) throw error;
    } catch (error) {
      if ((error as ApiError).message) {
        alert((error as ApiError).message);
      }
    }
  }

  /** Get everything before the @ of the email */
  function getUserFromEmail(email: string): string {
    const [emailUser] = email.split('@');
    return emailUser;
  }

  function processAuthState(user: User | null): definitionsJSON['users'] | null {
    if (!user) return null;
    // Get the variables "id" from $profileStore
    const id = user.id;

    // Get the user_response_id from userMetaData
    const userMetaData = user.user_metadata as UserMetadata;
    const { email } = userMetaData;
    const user_response_id = getUserFromEmail(email);

    // Create payload for auth information
    const payload = { id, user_response_id, ...userMetaData };
    console.log('🚀 ~ file: __layout.svelte ~ line 59 ~ payload', payload);
    return payload;
  }
</script>

<script lang="ts">
  import '../app.css';

  // Initialize theme-change, taken from https://github.com/saadeghi/theme-change
  import { browser } from '$app/env';
  import LocationAutoComplete from '$lib/components/LocationAutoComplete.svelte';
  import LoginSplashScreen from '$lib/components/LoginSplashScreen.svelte';
  import TheNavBar from '$lib/components/TheNavBar.svelte';
  import { authLoadingStore, signOut } from '$lib/stores/auth/authLoadingStore';
  import { profileStore, refreshProfileStore } from '$lib/stores/auth/profileStore';
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import type { UserMetadata } from '$lib/types/UserMetaData';
  import { supabase } from '$lib/utils/supabaseClient';
  import type { ApiError, User } from '@supabase/supabase-js';
  import { onMount } from 'svelte';
  import { themeChange } from 'theme-change';

  // Handle login state on page load
  if (browser) {
    const user = supabase.auth.user();
    redirectIfUserNullOrNotEdu(user);
    // If user is logged in already
    if (user) onUserHasSession();
    $authLoadingStore = false;
  }

  // Handle login state once supabase changes kick in
  supabase.auth.onAuthStateChange(async (_, loggedIn) => {
    // If logout
    if (!loggedIn) {
      $profileStore = null;
      $authLoadingStore = false;
      console.log(
        '🚀 ~ file: __layout.svelte ~ line 49 ~ supabase.auth.onAuthStateChange ~ authLoadingStore',
        authLoadingStore
      );
      return;
      // return goto('/landing');
    } else {
      // If login
      return onUserHasSession();
    }
  });

  async function onUserHasSession() {
    const user = supabase.auth.user();
    console.log('🚀 ~ file: __layout.svelte ~ line 48 ~ supabase.auth.onAuthStateChange ~ user', user);
    if (user) $authLoadingStore = false;
    const payload: definitionsJSON['users'] | null = processAuthState(user);
    console.log('🚀 ~ file: __layout.svelte ~ line 60 ~ supabase.auth.onAuthStateChange ~ payload', payload);
    // Create a new row in user_responses, if not already
    const { data, error } = await supabase
      .from<definitionsJSON['user_responses']>('user_responses')
      .upsert({ user_response_id: payload?.user_response_id });
    if (data) console.log(data);
    if (error) console.error(error);
    await uploadProfileDataToSupabase(payload);
    return await refreshProfileStore(payload?.id);
  }

  onMount(() => {
    themeChange(false);
  });

  let modalOpen = $profileStore?.place_id === null;
  function closeModal() {
    modalOpen = false;
  }
</script>

<TheNavBar>
  {#if $authLoadingStore}
    <LoginSplashScreen loading={true} />
    <!-- Else if Logged In, just loading store -->
    <!-- Else if Logged Out -->
  {:else if !$profileStore}
    <LoginSplashScreen loading={false} />
  {:else}
    <slot />
  {/if}
  <footer>
    <div class="flex flex-col justify-center">
      <p class="text-center">
        Made with <span>❤️</span>
        by Braden.
      </p>
      <a class="btn btn-xs" href="mailto:braden.wong@yale.edu">Request a feature or report a bug</a>
    </div>
  </footer>
</TheNavBar>
<div class="modal modal-bottom sm:modal-middle" class:modal-open={modalOpen}>
  <div class="modal-box">
    <div class="text-xl font-extrabold">Where are you now?</div>
    <div class="my-4 text-xs text-base-content/70">
      To continue, enter your current city. For privacy, feel free to use a city that is in proximity rather than exact
      location.
    </div>
    <LocationAutoComplete isCurrentUser={true} query={$profileStore?.description ?? ''} />
    <div class="modal-action">
      <label for="my-modal-6" class="btn" on:click={closeModal}>Okay!</label>
    </div>
  </div>
</div>

<style>
</style>
