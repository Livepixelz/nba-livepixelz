<template>
  <section class="team-roster">
    <div class="">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="player of roster" :key="player.PLAYER_ID">
          <nuxt-link :to="`/players/${player.PLAYER_ID}`">
            <PlayerPicture :player="player" />
          </nuxt-link>
        </swiper-slide>

        <div slot="pagination" class="swiper-pagination">
          <a class="swiper-button-prev"></a>
          <a class="swiper-button-next"></a>
        </div>
      </swiper>
    </div>
  </section>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper/core'
SwiperCore.use([Keyboard, Pagination, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  props: {
    roster: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOptions: {
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        pagination: true,
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 0,
        observer: true,
        observerUpdate: () => {
          console.log('swiper update')
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  updated() {
    console.log('Team roster component update')
  },
  created() {
    console.log('Team roster component created')
  },
  beforeDestroy() {
    console.log('Team roster component destroyed')
    this.swiper.destroy()
  },
}
</script>
<style scoped>
.swiper-pagination {
  top: 50%;
  transform: translate3d(0, -50%, 0);
  width: 100%;
  display: flex;
  justify-content: space-between;
}
</style>
