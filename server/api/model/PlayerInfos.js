const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const playerInfosSchema = mongoose.Schema(
  {
    PERSON_ID: {
      type: Number,
      required: true
    },
    FIRST_NAME: {
      type: String,
      required: true
    },
    LAST_NAME: {
      type: String,
      required: true
    },
    DISPLAY_FIRST_LAST: {
      type: String,
      required: true
    },
    DISPLAY_LAST_COMMA_FIRST: {
      type: String,
      required: true
    },
    DISPLAY_FI_LAST: {
      type: String,
      required: true
    },
    PLAYER_SLUG: {
      type: String,
      required: true
    },
    BIRTHDATE: {
      type: String,
      required: true
    },
    SCHOOL: {
      type: String,
      required: true
    },
    COUNTRY: {
      type: String,
      required: true
    },
    LAST_AFFILIATION: {
      type: String,
      required: true
    },
    HEIGHT: {
      type: String,
      required: true
    },
    WEIGHT: {
      type: String,
      required: true
    },
    SEASON_EXP: {
      type: String,
      required: true
    },
    JERSEY: {
      type: String,
      required: true
    },
    POSITION: {
      type: String,
      required: true
    },
    ROSTERSTATUS: {
      type: String,
      required: true
    },
    GAMES_PLAYED_CURRENT_SEASON: {
      type: String,
      required: true
    },
    TEAM_ID: {
      type: String,
      required: true
    },
    TEAM_NAME: {
      type: String,
      required: true
    },
    TEAM_ABBREVIATION: {
      type: String,
      required: true
    },
    TEAM_CODE: {
      type: String,
      required: true
    },
    TEAM_CITY: {
      type: String,
      required: true
    },
    PLAYERCODE: {
      type: String,
      required: true
    },
    FROM_YEAR: {
      type: String,
      required: true
    },
    TO_YEAR: {
      type: String,
      required: true
    },
    DLEAGUE_FLAG: {
      type: String,
      required: true
    },
    NBA_FLAG: {
      type: String,
      required: true
    },
    GAMES_PLAYED_FLAG: {
      type: String,
      required: true
    },
    DRAFT_YEAR: {
      type: String,
      required: true
    },
    DRAFT_ROUND: {
      type: String,
      required: true
    },
    DRAFT_NUMBER: {
      type: String,
      required: true
    }
  },
  {
    collection: 'player_infos',
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

module.exports = mongoose.model('PlayerInfos', playerInfosSchema)
