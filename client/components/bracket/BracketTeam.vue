<template>
  <li
    class="bracket-team team-box"
    :class="`theme--${team.abbr.toLowerCase()} ${teamClass}`"
  >
    <div class="team-box__logo">
      <team-logo :size="48" :team-abbr="team.abbr.toLowerCase()" />
      <span class="team-box__abbr">{{ team.abbr }}</span>
    </div>
    <div class="team-box__name">
      <span class="team-box__city">{{ team.city }}</span>
      <span class="team-box__nickname">{{ team.nickname }}</span>
    </div>
    <div class="team-box__score">{{ team.wins }}</div>
  </li>
</template>
<script>
export default {
  props: {
    team: {
      type: Object,
      required: true,
    },
  },
  computed: {
    teamClass() {
      return this.team.winner ? `team-box--winner` : `team-box--loser`
    },
  },
}
</script>
