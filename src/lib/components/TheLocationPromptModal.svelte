<script lang="ts">
  import LocationAutoComplete from '$lib/components/LocationAutoComplete.svelte';
  import { profileStore } from '$lib/stores/auth/profileStore';

  const placeIDisEmpty = $profileStore?.place_id === null;
  let modalOpen = placeIDisEmpty;
  function closeModal() {
    modalOpen = false;
  }
</script>

<div class="modal modal-bottom sm:modal-middle" class:modal-open={modalOpen ?? true}>
  <div class="modal-box overflow-visible">
    <div class="text-xl font-extrabold">Where are you now?</div>
    <div class="my-4 text-xs text-base-content/70">
      For privacy, feel free to use a city that is in proximity rather than exact location. You can always change this
      later.
    </div>
    <LocationAutoComplete isCurrentUser={true} query={$profileStore?.description ?? ''} />
    <div class="modal-action">
      <label for="my-modal-6" class="btn" on:click={closeModal}>Okay!</label>
    </div>
  </div>
</div>

<style>
</style>
