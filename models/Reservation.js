const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const reservationschema= new Schema({
    email: {
        type:String,
        required:true
    },
    matchNumber:{
        type:Number
    },
    tickets:{
        category: {
            type:Number
        },
        quantity: {
            type:Number
        },
        price: {
            type:Number
        }
    },    
    card:{
        number: {
            type:String
        },
        expirationMonth: {
            type:Number
        },
        expirationYear: {
            type:Number
        },
        cvc: {
            type:String
        }
    }


})
module.exports = mongoose.model('Reservation',reservationschema);

