<template>
  <div class="matchup-wrapper">
    <ul class="matchup">
      <bracket-team :team="matchup.player1" />
      <bracket-team :team="matchup.player2" />
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    matchup: {
      type: Object,
      required: true,
    },
  },
}
</script>
