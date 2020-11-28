const axios = require("axios");
const coreAxios = axios.create({
    baseURL: "http://host.docker.internal:5000/ec021/v2",
});

module.exports = {
    create: (req, res) => {
        let url = `/toddy`;
        let data = req.body;
        let config = {
            headers: req.headers,
        };

        coreAxios
            .post(url, data, config)
            .then((response) => {
                return res.json(response.status, response.data);
            })
            .catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
    },
    update: (req, res) => {
        let url = `/toddy/${req.params.id}`;
        let data = req.body;
        let config = {
            headers: req.headers,
        };

        coreAxios
            .patch(url, data, config)
            .then((response) => {
                return res.json(response.status, response.data);
            })
            .catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
    },
    search: (req, res) => {
        let url = `/toddy`;
        let id = req.query.id;
        let config = {
            headers: req.headers,
        };

        id ? (url += `?id=${id}`) : null;

        coreAxios
            .get(url, config)
            .then((response) => {
                return res.json(response.status, response.data);
            })
            .catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
    },
    remove: (req, res) => {
        let url = `/toddy/${req.params.id}`;
        let config = {
            headers: req.headers,
        };

        coreAxios
            .delete(url, config)
            .then((response) => {
                return res.json(response.status, response.data);
            })
            .catch((error) => {
                return res.json(error.response.status, error.response.data);
            });
    },
};
