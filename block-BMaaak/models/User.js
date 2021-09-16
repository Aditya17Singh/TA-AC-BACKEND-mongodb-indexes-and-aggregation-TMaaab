var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
  name: { type: String },
  email: { type: String },
  address: {
    city: String,
    state: String,
    country: String,
    pin: Number,
  },
});

userSchema.createIndex({ email: 1 });

module.exports = mongoose.model("User", userSchema);
