<template>
  <table class="stats-table">
    <thead>
      <th v-for="key in keys" :key="key">{{ key }}</th>
    </thead>
    <tbody>
      <tr v-for="(statline, index) in statsFormatted" :key="index">
        <td v-for="(stat, j) in statline" :key="j">{{ stat }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  props: {
    stats: {
      type: Array,
      required: true,
    },
    filteredKeys: {
      type: Array,
      default: () => ['PLAYER_ID', 'LEAGUE_ID', 'TEAM_ID'],
    },
    pergameKeys: {
      type: Array,
      default: () => [
        'MIN',
        'FGM',
        'FGA',
        'FG3M',
        'FG3A',
        'FTM',
        'FTA',
        'OREB',
        'DREB',
        'REB',
        'AST',
        'STL',
        'BLK',
        'TOV',
        'PF',
        'PTS',
      ],
    },
    gamesplayedKey: {
      type: String,
      default: 'GP',
    },
  },
  computed: {
    statsFormatted() {
      return this.stats.map((statline) => {
        return Object.keys(statline)
          .filter((stat) => !this.filteredKeys.includes(stat))
          .reduce((obj, key) => {
            obj[key] = this.pergameKeys.includes(key)
              ? this.getValPerGame(statline[key], statline)
              : statline[key]
            return obj
          }, {})
      })
    },
    keys() {
      return Object.keys(this.statsFormatted[0])
    },
  },
  methods: {
    getValPerGame(value, statline, decimalsNumber = 1) {
      return (value / statline[this.gamesplayedKey]).toFixed(decimalsNumber)
    },
  },
}
</script>
