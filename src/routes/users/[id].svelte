<script context="module" lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import { supabase } from '$lib/utils/supabaseClient';
  import UserCard from '../../lib/components/UserCard.svelte';
  import UserLocationCard from '../../lib/components/UserLocationCard.svelte';
  import UserResponsesCard from '../../lib/components/UserResponsesCard.svelte';
  import UserSocials from '../../lib/components/UserSocials.svelte';

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
  <meta name="description" content="Profile information." />
</svelte:head>

<div class="min-h-screen-nav hero bg-base-200">
  <div class="h-full w-full">
    <div
      id="component-demo"
      class="flex w-full flex-col items-stretch gap-4 overflow-x-auto px-4 pt-1 pb-10 xl:grid xl:grid-flow-col xl:grid-cols-5 xl:grid-rows-6"
    >
      <!-- Cell 1 -->
      <div class="col-span-4 row-span-3 xl:col-span-2">
        <UserCard {userProfileInformation} />
        <div class="rounded-box mt-4 bg-neutral py-2 shadow-xl xl:w-full">
          <UserSocials {userProfileInformation} />
        </div>
      </div>

      <!-- Cell 2 -->
      <div class="col-span-2 row-span-3">
        <UserLocationCard {userProfileInformation} />
        <!-- <UserAvatarsRow {userProfileInformation} /> -->
      </div>
      <!-- Cell 3 -->
      <!-- <div class="col-span-1 row-span-6">
        <SpotifyPlayer url={userProfileInformation.expression} />
      </div> -->
      <!-- Cell 4 -->
      <div class="col-span-3 row-span-6">
        <UserResponsesCard {userProfileInformation} />
      </div>
      <!-- Cell 5 -->
      <!-- <div class="col-span-2 row-span-3"> -->
      <!-- <UserStatsInfoOptions {userProfileInformation} /> -->
      <!-- </div> -->
      <!-- Cell 6 -->
      <!-- <div class="col-span-2 row-span-3"> -->
      <!-- </div> -->

      <!-- 
      
      <UserMenuItems {userProfileInformation} />
       -->
    </div>
  </div>
</div>
<!-- <div class="divider divider-horizontal">OR</div> -->
