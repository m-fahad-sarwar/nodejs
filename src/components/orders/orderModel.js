const mongoose = require("mongoose");
const { Schema } = mongoose;

const orderSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  createdAt: { type: Date, default: Date.now },
});
const OrderModel = mongoose.model("Orders", orderSchema);
module.exports = OrderModel;