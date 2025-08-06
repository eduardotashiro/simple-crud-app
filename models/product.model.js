const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Pleas enter product name"]
        },

        quantity:{

        }


    }
);