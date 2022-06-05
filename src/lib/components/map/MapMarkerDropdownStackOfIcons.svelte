<script lang="ts">
  export let threeAvatars: string[];
  export let indicator: number;

  const avatarSize = 8;
</script>

<label tabindex="0" name="selected" class="stack">
  <div class="avatar indicator">
    <span class="badge indicator-item badge-secondary">{indicator}</span>
    <div class="w-{avatarSize} h-{avatarSize} outline-on-click rounded-lg">
      <img src={threeAvatars[0]} referrerpolicy="no-referrer" />
    </div>
  </div>
  {#if threeAvatars.length >= 2}
    <div class="avatar">
      <div class="w-{avatarSize} h-{avatarSize} outline-on-click rounded-lg">
        <img src={threeAvatars[1]} referrerpolicy="no-referrer" />
      </div>
    </div>
  {:else if threeAvatars.length >= 3}
    <div class="avatar">
      <div class="w-{avatarSize} h-{avatarSize} outline-on-click rounded-lg">
        <img src={threeAvatars[2]} referrerpolicy="no-referrer" />
      </div>
    </div>
  {/if}
</label>
