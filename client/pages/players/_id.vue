<template>
  <div
    class="team page--player"
    :class="`theme--${player.infos.TEAM_ABBREVIATION.toLowerCase()}`"
  >
    <header class="section section__header team-header">
      <breadcrumb :links="links" />
      <div class="flex flex-row w-full">
        <div class="pt-3 pb-10 w-2/3">
          <div class="flex flex-row justify-between">
            <div class="team-header__teamname">
              <h1>
                <span
                  class="team__city"
                  v-html="separateLetters(player.first_name)"
                />
                <span
                  class="team__nickname"
                  v-html="separateLetters(player.last_name)"
                />
              </h1>
              <div class="team__baseline flex content-center">
                <team-logo
                  class="w-8"
                  :team-abbr="player.infos.TEAM_ABBREVIATION.toLowerCase()"
                />
                <span class="text-3xl self-center">
                  {{ player.infos.TEAM_CITY }} {{ player.infos.TEAM_NAME }}
                </span>
              </div>
            </div>
          </div>

          <player-id
            :id-card="player.infos"
            class="player-id text-sm leading-4 xl:text-2xl xl:leading-10"
          />
          <div>
            <player-stats-summary
              :stats-summary="
                player.stats.SeasonTotalsRegularSeason[
                  player.stats.SeasonTotalsRegularSeason.length - 1
                ]
              "
            />
          </div>
        </div>
        <div class="flex flex-row self-end w-1/3">
          <div class="w-full">
            <team-logo
              class="player-picture__bglogo"
              :team-abbr="player.infos.TEAM_ABBREVIATION.toLowerCase()"
            />
            <img
              :src="`/images/players/${player.infos.TEAM_ID}/large/${player.id}.png`"
              width="1040"
              height="760"
              class="player-picture__image w-full"
              style="
                width: 170%;
                max-width: none;
                left: -100px;
                margin-top: -100px;
              "
            />
          </div>
        </div>
      </div>
    </header>
    <section
      v-if="player.stats.SeasonTotalsRegularSeason.length > 0"
      class="section"
    >
      <div class="section__header">
        <div class="section__title">Regular Season</div>
      </div>
      <div class="section__container">
        <stats-table :stats="player.stats.SeasonTotalsRegularSeason" />
      </div>
    </section>
    <section
      v-if="player.stats.SeasonTotalsPostSeason.length > 0"
      class="section"
    >
      <div class="section__header">
        <div class="section__title"><span>Playoffs</span></div>
      </div>
      <div class="section__container">
        <stats-table :stats="player.stats.SeasonTotalsPostSeason" />
      </div>
    </section>
  </div>
</template>
<script>
import { separateLetters } from '~/utils'

export default {
  beforeRouteLeave(to, from, next) {
    console.log(to.name)
    if (to.name === 'teams-id') {
      console.log('ANIMATE BACK TO HOME PAGE')
      this.animateTeamPageOut().finished.then(next)
    } else if (to.name === 'players-id') {
      // if (this.rosterIds.includes(parseInt(to.params.id))) {
      console.log('ANIMATE TO PLAYER PAGE FROM ACTUAL TEAM')
      this.animateTeamPageOut().finished.then(next)
      // } else {
      // console.log('ANIMATE TO PLAYER PAGE FROM OTHER TEAM')
      // }
    }
  },
  async asyncData({ $axios, params }) {
    const player = await $axios.$get(`/players/${params.id}`)
    return {
      player,
    }
  },
  computed: {
    links() {
      const links = []
      links.push({
        title: 'Home',
        href: '/teams',
      })
      links.push({
        title: `${this.player.infos.TEAM_CITY} ${this.player.infos.TEAM_NAME}`,
        href: `/teams/${this.player.infos.TEAM_ID}`,
      })
      links.push({
        title: this.player.full_name,
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
            targets: '.player-picture__image',
            translateY: [+50, 0],
            translateZ: 0,
            opacity: [0, 1],
            easing: 'easeInOutCubic',
            duration: 600,
            delay: (el, i) => {
              return 300 + 30 * i
            },
          },
          '-=4500'
        )
        .add(
          {
            targets: '.player-picture__bglogo',
            opacity: [0, 0.1],
            easing: 'easeInOutCubic',
            duration: 600,
            delay: (el, i) => {
              return 300 + 30 * i
            },
          },
          '-=4000'
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
            targets: '.team__baseline',
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
        .add(
          {
            targets: '.player-picture__bglogo',
            opacity: [0.1, 0],
            easing: 'easeInOutCubic',
            duration: 600,
            delay: (el, i) => {
              return 300 + 30 * i
            },
          },
          '-=4000'
        )
    },
  },
}
</script>
