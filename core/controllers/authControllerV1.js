require("dotenv").config();

module.exports = {
    login: (req, res) => {
        let { user, pass } = req.body;

        let token = `${user}${process.env.SECRET}${pass}`;

        let resposta = {
            user,
            token,
        };

        if (!user || !pass) {
            return res.json(401, { error: "Usuário ou Senha inválidos!" });
        }

        return res.json(200, resposta);
    },
    validateToken: (req, res, next) => {
        let token = req.headers.token;

        if (!token) {
            return res.json(403, { error: "Token inválido" });
        }
    },
};
