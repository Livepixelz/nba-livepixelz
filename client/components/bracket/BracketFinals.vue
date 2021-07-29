<template>
  <div class="bracket-finals final">
    <i class="fa fa-trophy"></i>
    <div class="round-details">Finals</div>
    <div class="round-matchups flex flex-col flex-1 justify-around">
      <ul class="matchup championship">
        <bracket-team :team="finals.player1" />
        <bracket-team :team="finals.player2" />
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    finals: {
      type: Object,
      required: true,
    },
  },
}
</script>
