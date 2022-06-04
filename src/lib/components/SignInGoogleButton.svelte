<script lang="ts">
  import { signIn } from '$lib/stores/auth/authLoadingStore';
  import GoogleIcon from './icons/GoogleIcon.svelte';
    export let loading = false;
</script>

<button class:loading class="btn btn-primary" on:click={signIn}>
  <div class="left">
    <GoogleIcon />
  </div>
  Login with yale.edu
</button>
