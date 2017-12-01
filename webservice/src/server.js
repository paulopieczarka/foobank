const app = require("./index");

const server = app.listen(8000, () => { 
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Hephaestus is listening on http://${host}:${port}.`)
});