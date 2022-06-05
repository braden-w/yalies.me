<script lang="ts">
  import LocationsListIcon from '$lib/components/icons/LocationsListIcon.svelte';
  import MapIcon from '$lib/components/icons/MapIcon.svelte';
</script>

<div class="card flex flex-col justify-between gap-2 bg-base-100 p-4 md:flex-row md:gap-0">
  <a href="/places/New Haven, CT, USA" sveltekit:prefetch class="btn btn-primary btn-md shrink grow basis-0">
    <MapIcon /> People in New Haven
  </a>
  <div class="divider divider-horizontal" />
  <a href="/map" sveltekit:prefetch class="btn btn-primary btn-md shrink grow basis-0">
    <MapIcon /> Go To Map
  </a>
  <div class="divider divider-horizontal" />
  <a href="/locations" sveltekit:prefetch class="btn btn-primary btn-md shrink grow basis-0">
    <LocationsListIcon /> See All Locations
  </a>
</div>
