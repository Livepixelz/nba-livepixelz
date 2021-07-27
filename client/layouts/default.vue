<template>
  <div>
    <TeamsNav />
    <div class="app-container">
      <transition name="livepixelz-page" mode="out-in">
        <Nuxt />
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    beforeEnter(el) {
      this.$anime.set(el, {
        opacity: 0,
      })
    },

    enter(el, done) {
      this.$anime({
        targets: el,
        opacity: [0, 1],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done,
      })
    },

    leave(el, done) {
      this.$anime({
        targets: el,
        opacity: [1, 0],
        duration: 500,
        easing: 'easeInOutSine',
        complete: done,
      })
    },
  },
}
</script>
