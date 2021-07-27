const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const teamSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true
    },
    full_name: {
      type: String,
      required: true
    },
    abbreviation: {
      type: String,
      required: true
    },
    nickname: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    year_founded: {
      type: Number,
      required: true
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
)

teamSchema.virtual('details', {
  ref: 'TeamDetails',
  localField: 'id',
  foreignField: 'id',
  justOne: true
})

teamSchema.virtual('roster', {
  ref: 'TeamRoster',
  localField: 'id',
  foreignField: 'id',
  justOne: true
})

//teamSchema.pre('find', autoPopulate)
teamSchema.pre('findOne', autoPopulate)

function autoPopulate(next) {
  this.populate('details roster')
  next()
}

module.exports = mongoose.model('Team', teamSchema)
