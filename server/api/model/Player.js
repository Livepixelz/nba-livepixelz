const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const playerSchema = mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    full_name: {
      type: String,
      required: true
    },
    first_name: {
      type: String,
      required: true
    },
    last_name: {
      type: String,
      required: true
    },
    is_active: {
      type: Boolean,
      required: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

playerSchema.virtual('infos', {
  ref: 'PlayerInfos',
  localField: 'id',
  foreignField: 'PERSON_ID',
  justOne: true
})

playerSchema.virtual('stats', {
  ref: 'PlayerStats',
  localField: 'id',
  foreignField: 'id',
  justOne: true
})

//playerSchema.pre('find', autoPopulate)
playerSchema.pre('findOne', autoPopulate)

function autoPopulate(next) {
  this.populate('infos stats')
  next()
}

module.exports = mongoose.model('Player', playerSchema)
