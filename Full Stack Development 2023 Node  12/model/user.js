/* Schema Definition */
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: String,
  cart: [{ type: Schema.Types.ObjectId, ref: 'Product' }], /* An Array Of Schema.Types.ObjectId References To Product Documents. This Represents A User's Shopping Cart */

  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v);
      },
      message: (props) => `${props.value} Not A Valid Email!`,
    },
  },

  password: { type: String, minLength: 6, required: true },
  token: String,
});

exports.User = mongoose.model('User', userSchema);