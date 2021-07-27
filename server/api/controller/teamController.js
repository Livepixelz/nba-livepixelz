const mongoose = require('mongoose')
const Team = mongoose.model('Team')

exports.index = async (req, res) => {
  const allTeams = await Team.find()
  res.json(allTeams)
}

exports.show = async (req, res) => {
  const id = req.params.id
  const team = await Team.findOne({ id }).populate('details')
  console.log(team)
  res.json(team)
}
