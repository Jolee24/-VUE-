var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/vuedemo1', { useNewUrlParser: true })

var Schema = mongoose.Schema

var homeSchema = new Schema({
  url: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Homecarousel', homeSchema)