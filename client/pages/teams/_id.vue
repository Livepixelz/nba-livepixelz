<template>
  <div
    class="team page--team"
    :class="`theme--${team.abbreviation.toLowerCase()}`"
  >
    <header
      class="section section__header team-header flex justify-between"
      style="flex-flow: column"
    >
      <breadcrumb :links="links" />
      <div class="team-banner justify-between flex-row flex w-full gap-8">
        <div class="layer"></div>
        <div class="team-header__brand">
          <h1 class="team__name">
            <span class="team__city mt-3" v-html="separateLetters(team.city)" />
            <span
              class="team__nickname"
              v-html="separateLetters(team.nickname)"
            />
          </h1>
          <!-- <p class="team__baseline">{{ team.year_founded }}</p> -->
        </div>
        <team-id :id-card="idCard" class="w-1/2 mt-12" />
        <div class="team-header__logo">
          <team-logo :team-abbr="team.abbreviation.toLowerCase()" />
        </div>
      </div>
      <team-roster :roster="teamRoster" class="w-full" />
    </header>

    <section v-if="false" class="section">
      <div class="section__container">
        <div class="section__header">
          <div class="section__title">
            <h2 class="font-black text-lg">Retired Jerseys</h2>
          </div>
        </div>
        <ul class="flex flex-wrap">
          <li
            v-for="hofmember of team.details.TeamRetired"
            :key="hofmember.PLAYERID"
            class="mr-4 card"
          >
            <h3 class="font-bold">
              {{ hofmember.PLAYER }}
            </h3>
            <p class="jersey-number">{{ hofmember.JERSEY }}</p>
            <p>{{ hofmember.SEASONSWITHTEAM }}</p>
            <p>{{ hofmember.YEAR }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>
<script>
import { separateLetters } from '~/utils'

export default {
  beforeRouteLeave(to, from, next) {
    if (to.name === 'teams-id') {
      console.log('ANIMATE BACK TO HOME PAGE')
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
  async asyncData({ $axios, params }) {
    const team = await $axios.$get(`/teams/${params.id}`)
    return {
      team,
    }
  },
  computed: {
    idCard() {
      return this.team.details.TeamBackground[0]
    },
    teamRoster() {
      return this.team.roster.CommonTeamRoster
    },
    rosterIds() {
      return this.teamRoster.map((player) => player.PLAYER_ID)
    },
    links() {
      const links = []
      links.push({
        title: 'Home',
        href: '/teams',
      })
      links.push({
        title: `${this.team.full_name}`,
        href: ``,
      })
      return links
    },
  },
  mounted() {
    this.animateTeamPageIn()
  },
  methods: {
    separateLetters,
    animateTeamPageIn() {
      return this.$anime
        .timeline()
        .add({
          targets: '.team__city .letter',
          translateY: [40, 0],
          translateZ: 0,
          opacity: [0, 1],
          easing: 'easeInOutCubic',
          duration: 600,
          delay: (el, i) => 500 + 30 * i,
        })
        .add(
          {
            targets: '.team__nickname .letter',
            translateX: [100, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeInOutCubic',
            duration: 1000,
            delay: (el, i) => 1000 + 30 * i,
          },
          '-=2000'
        )
        .add(
          {
            targets: '.id__line .letter',
            translateX: [40, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeInOutCubic',
            duration: 200,
            delay: (el, i) => 200 + 30 * i,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.player-picture',
            translateY: [+50, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeInOutCubic',
            duration: 600,
            delay: (el, i) => {
              return 300 + 30 * i
            },
          },
          '-=3000'
        )
        .add(
          {
            targets: '.team-header__logo img',
            translateY: [-10, 0],
            opacity: [0, 1],
            easing: 'easeInOutCubic',
            duration: 500,
            delay: (el, i) => 100 + 30 * i,
          },
          '-=2000'
        )
    },
    animateTeamPageOut() {
      return this.$anime
        .timeline()
        .add({
          targets: '.team__city .letter',
          translateY: [0, +30],
          opacity: [1, 0],
          easing: 'easeInOutCubic',
          duration: 500,
          delay: (el, i) => 100 + 30 * -i,
        })
        .add(
          {
            targets: '.team__nickname .letter',
            translateX: [0, -60],
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            duration: 1000,
            delay: (el, i) => 100 + 30 * i,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.team-banner .id',
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            duration: 500,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.team-header__logo img',
            opacity: [1, 0],
            scale: [1, 0.5],
            easing: 'easeInOutCubic',
            duration: 500,
            delay: (el, i) => 100 + 30 * i,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.player-picture',
            translateY: [0, 50],
            translateZ: 0,
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            duration: 600,
            delay: (el, i) => {
              return 600 + 30 * i
            },
          },
          '-=3000'
        )
    },
    animateTeamPageToPlayerPage() {
      return this.$anime
        .timeline()
        .add({
          targets: '.team__city .letter',
          translateY: [0, +30],
          opacity: [1, 0],
          easing: 'easeInOutCubic',
          duration: 500,
          delay: (el, i) => 100 + 30 * -i,
        })
        .add(
          {
            targets: '.team__nickname .letter',
            translateX: [0, -60],
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            duration: 1000,
            delay: (el, i) => 100 + 30 * i,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.team-banner .id',
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            duration: 500,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.team-header__logo img',
            opacity: [1, 0],
            scale: [1, 0.5],
            easing: 'easeInOutCubic',
            duration: 500,
            delay: (el, i) => 100 + 30 * i,
          },
          '-=1000'
        )
        .add(
          {
            targets: '.player-picture',
            translateY: [0, 50],
            translateZ: 0,
            opacity: [1, 0],
            easing: 'easeInOutCubic',
            duration: 600,
            delay: (el, i) => {
              return 600 + 30 * i
            },
          },
          '-=3000'
        )
        .add({
          targets: '.team-banner .layer',
          opacity: [1, 0],
          translateZ: 0,
          easing: 'easeInOutCubic',
          duration: 2000,
        })
    },
  },
}
</script>
<style scoped>
.letter {
  display: inline-block;
}
</style>
