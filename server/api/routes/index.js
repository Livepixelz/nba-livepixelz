const express = require('express')
const router = express.Router()
const playerController = require('../controller/playerController')
const teamController = require('../controller/teamController')

router.get('/teams', teamController.index)
router.get('/teams/:id', teamController.show)
router.get('/players', playerController.index)
router.get('/players/:id', playerController.show)

module.exports = router
