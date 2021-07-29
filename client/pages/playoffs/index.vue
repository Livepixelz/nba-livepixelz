<template>
  <section class="section flex flex-1">
    <div class="section__container bracket-container flex flex-1">
      <div class="bracket flex-1">
        <bracket-split :rounds="rounds.west" class="split-one" />

        <div class="champion">
          <bracket-champions :champions="champions" />
          <bracket-finals :finals="finals" />
          <div class="spacer">
            <h1
              class="
                text-2xl
                xl:text-4xl
                font-bold
                text-white
                uppercase
                mb-2
                xl:mb-8
              "
            >
              NBA PLAYOFFS <br />
              <span class="text-2xl">2021</span>
            </h1>
          </div>
        </div>

        <bracket-split :rounds="rounds.east" class="split-two" />
      </div>
    </div>
  </section>
</template>

<script>
import playoffs from '~/data/__mocks__/playoffbracket2021.json'

export default {
  layout: 'bracket',
  data() {
    return {
      bracket: playoffs.bracket.playoffBracketSeries,
      round1Order: [1, 4, 3, 2],
    }
  },
  computed: {
    rounds() {
      return {
        east: [this.eastFirstRound, this.eastSemis, this.eastFinals],
        west: [this.westFirstRound, this.westSemis, this.westFinals],
        finals: this.finals,
      }
    },
    eastFirstRound() {
      return {
        games: this.bracket
          .filter(
            (series) =>
              series.roundNumber === 1 && series.seriesConference === 'East'
          )
          .map(this.formatSeriesData)
          .sort(
            (a, b) =>
              this.round1Order.indexOf(a.highSeedRank) -
              this.round1Order.indexOf(b.highSeedRank)
          ),
      }
    },
    eastSemis() {
      return {
        games: this.bracket
          .filter(
            (series) =>
              series.roundNumber === 2 && series.seriesConference === 'East'
          )
          .map(this.formatSeriesData),
      }
    },
    eastFinals() {
      return {
        games: this.bracket
          .filter(
            (series) =>
              series.roundNumber === 3 && series.seriesConference === 'East'
          )
          .map(this.formatSeriesData),
      }
    },
    westFirstRound() {
      return {
        games: this.bracket
          .filter(
            (series) =>
              series.roundNumber === 1 && series.seriesConference === 'West'
          )
          .map(this.formatSeriesData)
          .sort(
            (a, b) =>
              this.round1Order.indexOf(a.highSeedRank) -
              this.round1Order.indexOf(b.highSeedRank)
          ),
      }
    },
    westSemis() {
      return {
        games: this.bracket
          .filter(
            (series) =>
              series.roundNumber === 2 && series.seriesConference === 'West'
          )
          .map(this.formatSeriesData),
      }
    },
    westFinals() {
      return {
        games: this.bracket
          .filter(
            (series) =>
              series.roundNumber === 3 && series.seriesConference === 'West'
          )
          .map(this.formatSeriesData),
      }
    },
    finals() {
      return this.bracket
        .filter((series) => series.roundNumber === 4)
        .map(this.formatSeriesData)[0]
    },
    champions() {
      return this.finals.seriesWinner
        ? this.finals.player1.id === this.finals.seriesWinner
          ? this.finals.player1
          : this.finals.player2
        : null
    },
  },
  methods: {
    formatSeriesData(s) {
      const highSeedPlayerNumber = s.displayTopTeam === s.highSeedId ? 1 : 2
      const lowSeedPlayerNumber = s.displayTopTeam === s.lowSeedId ? 1 : 2
      return {
        ...s,
        ['player' + highSeedPlayerNumber]: {
          id: s.highSeedId,
          city: s.highSeedCity,
          nickname: s.highSeedName,
          abbr: s.highSeedTricode,
          winner: s.highSeedId === s.seriesWinner,
          wins: s.highSeedSeriesWins,
        },
        ['player' + lowSeedPlayerNumber]: {
          id: s.lowSeedId,
          city: s.lowSeedCity,
          nickname: s.lowSeedName,
          abbr: s.lowSeedTricode,
          winner: s.lowSeedId === s.seriesWinner,
          wins: s.lowSeedSeriesWins,
        },
      }
    },
  },
}
</script>
