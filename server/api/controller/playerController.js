const mongoose = require('mongoose')
const Player = mongoose.model('Player')

exports.index = async (req, res) => {
  const allPlayers = await Player.find()
  res.json(allPlayers)
}

exports.show = async (req, res) => {
  const { id } = req.params
  const player = await Player.findOne({ id }).populate('infos stats')
  res.json(player)
}
