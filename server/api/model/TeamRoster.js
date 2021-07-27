const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const teamRosterSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    CommonTeamRoster: [{ type: Object, required: true }],
    Coaches: [{ type: Object, required: true }]
  },
  { collection: 'team_roster' }
)

module.exports = mongoose.model('TeamRoster', teamRosterSchema)
