<script context="module" lang="ts">
  import type { definitionsJSON } from '$lib/types/definitionsJSON';
  import { supabase } from '$lib/utils/supabaseClient';
  import UserCard from '../../lib/components/UserCard.svelte';
  import UserLocationCard from '../../lib/components/UserLocationCard.svelte';

  export async function load({ params }: { params: { facebook_email: string } }) {
    const { data, error } = await supabase
      .from<definitionsJSON['users_facebook_places']>('users_facebook_places')
      .select('*')
      .eq('email', params.facebook_email)
      .maybeSingle();
    if (error) return { status: error.code, props: { error } };
    return {
      status: 200,
      props: { userProfileInformation: data },
    };
  }
</script>

<script lang="ts">
  export let userProfileInformation: definitionsJSON['users_facebook_places'];
</script>

<svelte:head>
  <title>{userProfileInformation.name}</title>
  <meta name="description" content="Profile information from Facebook." />
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
      </div>

      <!-- Cell 2 -->
      <div class="col-span-2 row-span-3">
        <UserLocationCard {userProfileInformation} />
      </div>
    </div>
  </div>
</div>
<!-- <div class="divider divider-horizontal">OR</div> -->
