<template>
  <div
    class="flex flex-wrap align-center content-center justify-center h-screen"
    :class="{ 'selected--team': selectedTeamId }"
  >
    <swiper ref="mySwiper" :options="swiperOptions" class="px-24">
      <swiper-slide
        v-for="team of navItemsSortedAZ"
        :key="team.id"
        class="team-card w-1/4 p-4"
        :class="`theme--${team.abbreviation.toLowerCase()} ${
          team.id === selectedTeamId && 'slide--selected'
        }`"
      >
        <div
          :class="`card card--${team.id} ${
            team.id === selectedTeamId && 'card--selected'
          }`"
          :data-team-id="team.id"
          @click="selectTeam(team.id)"
        >
          <div>
            <img
              svg-inline
              :src="`/icons/logos/teams/${team.abbreviation.toLowerCase()}.svg`"
            />
            <h2 class="text-xl font-black">
              {{ team.city }}<br /><span class="text-3xl">{{
                team.nickname
              }}</span>
            </h2>
            <p>{{ team.year_founded }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import SwiperCore, { Keyboard, Pagination, Navigation } from 'swiper/core'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Keyboard, Pagination, Navigation])

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  directives: {
    swiper: directive,
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'teams-id') {
      console.log('ANIMATE TO TEAMS PAGE')
      this.animateTeamsPageOut().finished.then(() => {
        // this.swiper.destroy()
        next()
      })
    } else if (to.name === 'players-id') {
      if (this.rosterIds.includes(parseInt(to.params.id))) {
        console.log('ANIMATE TO PLAYER PAGE FROM ACTUAL TEAM')
        this.animateTeamPageToPlayerPage().finished.then(next)
      } else {
        console.log('ANIMATE TO PLAYER PAGE FROM OTHER TEAM')
        this.animateTeamPageOut().finished.then(next)
      }
    } else {
      this.animateTeamPageOut().finished.then(next)
    }
  },
  beforeRouteUpdate(to, from, next) {
    this.animateTeamPageOut().finished.then(() => {
      console.log('ANIMATIONS BEFORE CHANGING TEAM')
      const toTeam = this.$store.getters['teams/teamById'](
        parseInt(to.params.id)
      )
      console.log(toTeam)
      this.team.abbreviation = toTeam.abbreviation
      setTimeout(() => {
        next()
      }, 500)
    })
  },
  layout: 'home',
  async asyncData({ $axios }) {
    const nav = await $axios.$get('/teams')
    return {
      nav,
    }
  },
  data() {
    return {
      selectedTeamId: null,
      swiperOptions: {
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        watchSlidesVisibility: true,
        centeredSlides: true,
        slidesPerView: 5,
        slidesPerGroup: 1,
        spaceBetween: 0,
        loop: true,
        on: {
          keyPress(swiper, event) {
            if (event === 13) {
              this.slides[this.activeIndex].querySelector('.card').click()
            }
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
    navItemsSortedAZ() {
      return [...this.nav].sort((a, b) => (a.full_name < b.full_name ? -1 : 1))
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
    // this.swiper.destroy()
  },
  methods: {
    selectTeam(teamId) {
      this.selectedTeamId = teamId
      this.$router.push({ path: `/teams/${teamId}` })
    },
    animateTeamsPageOut() {
      return this.$anime
        .timeline()
        .add({
          targets: `.card--${this.selectedTeamId}`,
          translateZ: 0,
          scale: 1,
          easing: 'easeInOutCubic',
          duration: 600,
        })
        .add(
          {
            targets: `.card:not(.card--${this.selectedTeamId})`,
            translateY: 300,
            opacity: 0,
            easing: 'easeInOutCubic',
            duration: 1000,
            delay: (el, i) => 1000 + 30 * i,
          },
          '-=2000'
        )
    },
  },
}
</script>
<style scoped>
.selected-team .swiper-slide:not(.slide--selected) .card {
  filter: blur(20px);
}
</style>
