const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const teamDetailsSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    TeamBackground: [{ type: Object, required: true }],
    TeamSocialSites: [{ type: Object, required: true }],
    TeamAwardsChampionships: [{ type: Object, required: true }],
    TeamAwardsConf: [{ type: Object, required: true }],
    TeamAwardsDiv: [{ type: Object, required: true }],
    TeamHof: [{ type: Object, required: true }],
    TeamRetired: [{ type: Object, required: true }]
  },
  { collection: 'team_details' }
)

module.exports = mongoose.model('TeamDetails', teamDetailsSchema)
