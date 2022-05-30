import { type Writable, get } from 'svelte/store';
import type { definitions } from '$lib/types/supabase';
import { supabase } from '$lib/utils/supabaseClient';
import createStore from '$lib/utils/createStore';


export async function refreshSessionStore() {
  const { data, error } = await supabase
    .from<definitions['users_facebook_places']>('users_facebook_places')
    .select('*')
    .eq('id', get(sessionStore)?.id)
    .maybeSingle();
  if (data) {
    console.log(
      '🚀 ~ file: sessionStore.ts ~ line 8 ~ refreshSessionStore ~ data',
      data
    );
    sessionStore.set(data);
    return data;
  }
  if (error) {
    console.error(error);
    sessionStore.set(null);
  }
  return null;
}

export const sessionStore: Writable<
  definitions['users_facebook_places'] | null
> = createStore<definitions['users_facebook_places'] | null>('yalies.me-sessionStore', null);