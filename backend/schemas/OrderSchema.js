const {Schema} = require('mongoose')

const OrderSchema=new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    mode: String
})

module.exports={OrderSchema}