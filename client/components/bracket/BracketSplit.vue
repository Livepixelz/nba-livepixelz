<template>
  <div class="bracket-split split">
    <div v-for="(round, i) in rounds" :key="i" :class="getRoundClass(i)">
      <div class="round-details">
        {{ getRoundName(i) }}
      </div>
      <div class="round-matchups">
        <bracket-matchup
          v-for="(matchup, j) in round.games"
          :key="j"
          :matchup="matchup"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    rounds: {
      type: Array,
      required: true,
    },
  },
  methods: {
    getRoundClass(index) {
      let roundSuffix = ''
      switch (index) {
        case 0:
          roundSuffix = '-one'
          break
        case 1:
          roundSuffix = '-two'
          break
        case 2:
          roundSuffix = '-three'
          break
      }
      return `round round${roundSuffix}`
    },
    getRoundName(index) {
      switch (index) {
        case 0:
          return 'First Round'
        case 1:
          return 'Conf. Semis'
        case 2:
          return 'Conf. Finals'
      }
    },
  },
}
</script>
