<template>
  <div class="bracket-finals final">
    <div class="round-details">Finals</div>
    <div class="round-matchups flex flex-col flex-1 justify-around pt-10">
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
