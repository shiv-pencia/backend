import mongoose from 'mongoose'

const orderItemShema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  },
  quantity: {
    type: Number,
    required: true
  }
})
const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  orderItems: {
    type: [orderItemShema]
  },
  address: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING','CANCELLED','DELIVERD'],
    default: 'PENDING'
  }
},{timestamps:true})

export const Order = mongoose.model('Order',orderSchema)