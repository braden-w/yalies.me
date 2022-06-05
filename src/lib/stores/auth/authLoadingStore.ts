import { supabase } from '$lib/utils/supabaseClient';
import type { ApiError } from '@supabase/supabase-js';
import { writable, type Writable } from 'svelte/store';

/** Whether the profile information is loading (even if it is null). Set to true on login, and false when login is complete or profile information is fetched from memory.
 * Every time the user loads or refreshes the page, it takes time for profile information to be fetched. */
export const authLoadingStore: Writable<boolean> = writable(false);
export const signIn = async () => {
  try {
    authLoadingStore.set(true);
    // Get current url
    const redirectURL = window.location.href.split('#')[0];
    // alert(redirectURL)
    const { error } = await supabase.auth.signIn({ provider: 'google' }, { redirectTo: redirectURL });
    if (error) throw error;
  } catch (error) {
    if ((error as ApiError).message) {
      alert((error as ApiError).message);
    }
  } finally {
    authLoadingStore.set(false);
  }
};

export async function signOut() {
  try {
    authLoadingStore.set(true);
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  } catch (error) {
    if ((error as ApiError).message) {
      alert((error as ApiError).message);
    }
  } finally {
    authLoadingStore.set(false);
  }
}
