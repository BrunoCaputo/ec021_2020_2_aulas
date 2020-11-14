const Toddy = require("../models/Toddy");

module.exports = {
    create: async (req, res) => {
        console.log("Executando rota POST");
        let { lote, conteudo, validade } = req.body;

        try {
            let resposta = await Toddy.create({ lote, conteudo, validade });

            return res.json(201, resposta);
        } catch (error) {
            return res.json(400, { error: "Erro ao criar Toddy" });
        }
    },
    update: async (req, res) => {
        console.log("Executando rota PATCH");
        let { id } = req.params;
        let { lote, conteudo, validade } = req.body;

        try {
            const resposta = await Toddy.findByIdAndUpdate(
                id,
                {
                    lote,
                    conteudo,
                    validade,
                },
                { new: true }
            );

            return res.json(200, resposta);
        } catch (error) {
            return res.json(400, { error: "Erro ao atualizar Toddy" });
        }
    },
    search: async (req, res) => {
        console.log("Executando rota GET");
        let { id } = req.query;

        let resposta;
        if (id) {
            // Buscar por id
            try {
                resposta = await Toddy.findById(id);
            } catch (error) {
                return res.json(404, { error: "Toddy não encontrado" });
            }
        } else {
            // Buscar todos
            try {
                resposta = await Toddy.find({});
            } catch (error) {
                return res.json(404, { error: "Erro ao buscar Toddies" });
            }
        }

        return res.json(200, resposta);
    },
    remove: async (req, res) => {
        console.log("Executando rota DELETE");
        let { id } = req.params;

        try {
            await Toddy.findByIdAndRemove(id);

            return res.send(204);
        } catch (error) {
            return res.json(400, { error: "Erro ao deletar Toddy" });
        }
    },
};
