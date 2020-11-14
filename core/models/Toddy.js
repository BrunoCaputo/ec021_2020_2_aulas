const { Schema, model } = require("mongoose");

const ToddySchema = new Schema(
    {
        lote: String,
        conteudo: Number,
        validade: String,
    },
    {
        timestamps: true,
    }
);

module.exports = model("Toddy", ToddySchema);
