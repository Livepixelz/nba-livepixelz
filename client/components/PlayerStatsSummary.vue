<template>
  <div class="player-stats-summary flex">
    <div class="stat">
      <div class="stat__type">PPG</div>
      <div class="stat__value">{{ ppgCounter }}</div>
    </div>
    <div class="stat">
      <div class="stat__type">APG</div>
      <div class="stat__value">{{ apgCounter }}</div>
    </div>
    <div class="stat">
      <div class="stat__type">RPG</div>
      <div class="stat__value">{{ rpgCounter }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    statsSummary: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      ppgCounter: 0,
      apgCounter: 0,
      rpgCounter: 0,
    }
  },
  computed: {
    ppg() {
      return (this.statsSummary.PTS / this.statsSummary.GP).toFixed(1)
    },
    apg() {
      return (this.statsSummary.AST / this.statsSummary.GP).toFixed(1)
    },
    rpg() {
      return (this.statsSummary.REB / this.statsSummary.GP).toFixed(1)
    },
  },
  mounted() {
    const data = this
    this.$anime({
      targets: data,
      ppgCounter: data.ppg,
      apgCounter: data.apg,
      rpgCounter: data.rpg,
      easing: 'easeInOutQuad',
      round: 10,
    })
  },
}
</script>
