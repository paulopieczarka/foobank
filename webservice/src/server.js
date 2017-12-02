const app = require("./index");
const mongoose = require("./util/database");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "Ops! Hephaestus cannot reach the Mongoose."));
db.once("open", console.log.bind(console, "Hephaestus and the Mongoose are connected."));

const server = app.listen(8000, () => { 
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Hephaestus is listening on http://${host}:${port}.`);
});