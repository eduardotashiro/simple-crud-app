// Define o schema do produto (estrutura do dado no banco)
const mongoose = require('mongoose');
// Define o schema do produto (estrutura do dado no banco)
const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Pleas enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0 // Valor padrão caso o usuário não informe
        },
        image: {
            type: String,
            required: false
        },

    },
    {
        timestamps: true // Cria automaticamente os campos createdAt e updatedAt
    }

);

// Cria o model 'Product' com base no schema definido acima
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;