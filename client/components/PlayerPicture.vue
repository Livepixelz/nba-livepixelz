<template>
  <figure
    class="player-picture bgnumber h-full"
    @mouseenter="toggleLinkHover(true)"
    @mouseleave="toggleLinkHover(false)"
  >
    <div class="player-picture__frame">
      <img
        :src="filename"
        width="260"
        height="190"
        class="player-picture__image"
        @error="onImgError()"
      />
    </div>
    <figcaption class="player-picture__caption flex flex-col justify-end">
      <h3 class="player__firstname text-sm xl:text-2xl font-light slab">
        <span>{{ firstName }}</span>
      </h3>
      <h3 class="player__lastname text-sm xl:text-4xl font-bold uppercase">
        <span>{{ lastName }}</span>
      </h3>
      <p class="player__jerseynumber text-sm xl:text-6xl flex align-start">
        {{ player.NUM }}
      </p>
      <p class="player__position text-sm xl:pt-8 xl:text-3xl">
        {{ player.POSITION }}
      </p>
      <button-circle
        :class="{ hover: pictureIsHovered }"
        class="player-picture__halo"
      />
    </figcaption>
  </figure>
</template>
<script>
export default {
  props: {
    player: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      imgError: false,
      defaultImageUrl: '/images/players/default.png',
      pictureIsHovered: false,
    }
  },
  computed: {
    filename() {
      return `/images/players/${this.player.TeamID}/${this.player.PLAYER_ID}.png`
    },
    firstName() {
      return this.player.NICKNAME
    },
    lastName() {
      return this.player?.PLAYER?.replace(this.player.NICKNAME, '').trim() ?? ''
    },
  },
  methods: {
    onImgError(e) {
      console.log('IMAGE FAILED TO LOAD')
      this.imgError = true
    },
    toggleLinkHover(active) {
      this.pictureIsHovered = active
    },
  },
}
</script>
