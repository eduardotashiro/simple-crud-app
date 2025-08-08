const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema(

    {

        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0 // Valor padrão caso o usuário não informe
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

    },

    {
        timestamps: true // Cria automaticamente os campos createdAt e updatedAt
    }

);

// Cria o model 'Product' com base no schema definido acima
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;