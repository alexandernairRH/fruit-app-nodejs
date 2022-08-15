const uuid = require("node-uuid")
const initDb = require("./database/pg").initDb()

const {
    listFruits,
} = require("./database/queries")


module.exports = function (app) {
    app.get("/fruits", listFruits);

    app.post("/fruits", (request, response) => {
        let fruit = {
            id: uuid.v4(),
            name: request.body.name,
        }
        console.log('post called', fruit);
        response.send(fruit);
    });

    app.delete("/fruits/:id", (request, response) => {
        console.log('del-called ', request.params.id);
        response.send("deleting.");
    });

    app.put("/fruits/:id", (request, response) => {
        console.log('update-called ', request.params.id);
        response.send("updating.");
    });
}
