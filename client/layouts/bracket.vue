<template>
  <div class="flex flex-col h-screen">
    <TeamsNav />
    <div class="app-container flex flex-1 bg-gray-900">
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
