<script lang="ts">
  export let url = '';
  const defaultPlaylistID = '1uUHti2X6KkpUFcOr4FJ8v';
  $: playlistID = getPlaylistID();
  function getPlaylistID() {
    if (/^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/.test(url) === false) {
      return defaultPlaylistID;
    }
    return (
      url.match(/^(https:\/\/open.spotify.com\/playlist\/|spotify:user:spotify:playlist:)([a-zA-Z0-9]+)(.*)$/)?.[2] ??
      defaultPlaylistID
    );
  }
</script>

<div class="rounded-box h-full bg-base-100 shadow-xl xl:mx-0 xl:w-full">
  <iframe
    title="Spotify Player"
    src={`https://open.spotify.com/embed/playlist/${playlistID}`}
    class="rounded-box h-full w-full"
    frameborder="0"
    allowtransparency={true}
    allow="encrypted-media"
  />
</div>
