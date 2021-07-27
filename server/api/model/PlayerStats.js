const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const playerStatsSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    SeasonTotalsRegularSeason: [{ type: Object, required: true }],
    CareerTotalsRegularSeason: [{ type: Object, required: true }],
    SeasonTotalsPostSeason: [{ type: Object, required: true }],
    CareerTotalsPostSeason: [{ type: Object, required: true }],
    SeasonTotalsAllStarSeason: [{ type: Object, required: true }],
    CareerTotalsAllStarSeason: [{ type: Object, required: true }],
    SeasonTotalsCollegeSeason: [{ type: Object, required: true }],
    CareerTotalsCollegeSeason: [{ type: Object, required: true }],
    SeasonTotalsPreseason: [{ type: Object, required: true }],
    CareerTotalsPreseason: [{ type: Object, required: true }],
    SeasonRankingsRegularSeason: [{ type: Object, required: true }],
    SeasonRankingsPostSeason: [{ type: Object, required: true }],
    SeasonHighs: [{ type: Object, required: true }],
    CareerHighs: [{ type: Object, required: true }],
    NextGame: [{ type: Object, required: true }]
  },
  {
    collection: 'player_stats',
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('PlayerStats', playerStatsSchema)
